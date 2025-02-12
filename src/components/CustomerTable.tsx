import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import CustomerTableToolbar from "./CustomerTableToolbar";
import { Button } from "./ui/button";
import { Edit2, Trash2 } from "lucide-react";

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: "active" | "inactive";
}

interface CustomerTableProps {
  customers?: Customer[];
  onEdit?: (customer: Customer) => void;
  onDelete?: (customer: Customer) => void;
}

const CustomerTable = ({
  customers = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      phone: "(555) 123-4567",
      status: "active",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "(555) 987-6543",
      status: "inactive",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      phone: "(555) 246-8135",
      status: "active",
    },
  ],
  onEdit = () => {},
  onDelete = () => {},
}: CustomerTableProps) => {
  return (
    <div className="w-full h-full bg-background rounded-md border">
      <CustomerTableToolbar
        onSearch={(term) => console.log("Search:", term)}
        onSort={(column, direction) => console.log("Sort:", column, direction)}
      />
      <div className="p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell className="font-medium">{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      customer.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {customer.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onEdit(customer)}
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onDelete(customer)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CustomerTable;
