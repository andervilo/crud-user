import React, { useState } from "react";
import CustomerTable from "./CustomerTable";
import CustomerFormModal from "./CustomerFormModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: "active" | "inactive";
}

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null,
  );
  const [formMode, setFormMode] = useState<"create" | "edit">("create");

  const handleAddNew = () => {
    setFormMode("create");
    setSelectedCustomer(null);
    setIsFormOpen(true);
  };

  const handleEdit = (customer: Customer) => {
    setFormMode("edit");
    setSelectedCustomer(customer);
    setIsFormOpen(true);
  };

  const handleDelete = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsDeleteModalOpen(true);
  };

  const handleFormSubmit = (data: any) => {
    console.log("Form submitted:", data);
    setIsFormOpen(false);
  };

  const handleDeleteConfirm = () => {
    console.log("Delete confirmed:", selectedCustomer);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">
            Customer Management
          </h1>
          <Button onClick={handleAddNew} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Customer
          </Button>
        </div>

        <CustomerTable onEdit={handleEdit} onDelete={handleDelete} />

        <CustomerFormModal
          open={isFormOpen}
          onOpenChange={setIsFormOpen}
          onSubmit={handleFormSubmit}
          mode={formMode}
          initialData={selectedCustomer || undefined}
        />

        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDeleteConfirm}
          customerName={selectedCustomer?.name}
        />

        {/* Fixed position FAB for mobile */}
        <Button
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg md:hidden"
          onClick={handleAddNew}
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Home;
