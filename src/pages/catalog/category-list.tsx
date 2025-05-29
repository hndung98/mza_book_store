import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Icon, Input, Modal, useSnackbar } from "zmp-ui";

import CategoryTabs from "@/components/ui/category-tabs";
import SearchBar from "@/components/features/search-bar";
import { useAccessTokenStore } from "@/stores/auth-store";

const API_PREFIX =
  import.meta.env.VITE_API_PREFIX || "http://127.0.0.1:3000/api/native";
const API_URL = `${API_PREFIX}/categories`;
// const API_URL = "https://lukakuvic.vercel.app/api/native/categories";
type CategoryType = {
  id: string;
  name: string;
};
export default function CategoryListPage() {
  const navigate = useNavigate();
  const { openSnackbar } = useSnackbar();

  const [newCategories, setNewCategories] = useState<CategoryType[]>([]);

  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  const accessToken = useAccessTokenStore((state) => state.accessToken);

  const handleCreateNewCategory = () => {
    openSnackbar({
      icon: true,
      text: `Category: ${newCategoryName}`,
      action: {
        text: "Undo",
        close: true,
      },
      type: "countdown",
    });
    setOpenConfirmationModal(true);
    fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ name: newCategoryName }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.payload) {
          setNewCategories([...newCategories, data.payload]);
          setNewCategoryName("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          const listCategories = data.payload as CategoryType[];
          setNewCategories(listCategories);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="py-2">
        <SearchBar onClick={() => navigate("/search")} />
      </div>
      <CategoryTabs />
      <div className="grid grid-cols-4 p-4 gap-x-4 gap-y-8">
        {newCategories &&
          newCategories?.map((c) => (
            <div
              key={c.id}
              className="flex flex-col items-center space-y-2 overflow-hidden cursor-pointer"
            >
              <Icon icon="zi-gallery" />
              <p className="text-sm">{c.name}</p>
            </div>
          ))}
      </div>
      <div className="p-4">
        <Input
          helperText="Please enter the name of the category."
          label="Category name"
          value={newCategoryName}
          onChange={(e) => {
            setNewCategoryName(e.target.value as string);
          }}
        />
        <div className="flex flex-col items-center">
          <Button onClick={handleCreateNewCategory} variant="primary">
            Tạo
          </Button>
        </div>
      </div>
      <Modal
        actions={[
          {
            text: "Cancel",
            onClick() {
              setOpenConfirmationModal(false);
            },
          },
          {
            close: true,
            highLight: true,
            text: "OK",
            onClick() {
              setOpenConfirmationModal(false);
            },
          },
        ]}
        description="Are you sure?"
        title="Confirmation"
        visible={openConfirmationModal}
      />
    </>
  );
}
