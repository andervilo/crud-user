import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, SortAsc, SortDesc } from "lucide-react";

interface CustomerTableToolbarProps {
  onSearch?: (searchTerm: string) => void;
  onSort?: (column: string, direction: "asc" | "desc") => void;
}

const CustomerTableToolbar = ({
  onSearch = () => {},
  onSort = () => {},
}: CustomerTableToolbarProps) => {
  return (
    <div className="w-full h-[60px] bg-background border-b flex items-center justify-between px-4 gap-4">
      <div className="flex items-center flex-1 max-w-sm">
        <div className="relative w-full">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search customers..."
            className="pl-8 w-full"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={() => onSort("name", "asc")}
        >
          <SortAsc className="h-4 w-4" />
          Sort A-Z
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={() => onSort("name", "desc")}
        >
          <SortDesc className="h-4 w-4" />
          Sort Z-A
        </Button>
      </div>
    </div>
  );
};

export default CustomerTableToolbar;
