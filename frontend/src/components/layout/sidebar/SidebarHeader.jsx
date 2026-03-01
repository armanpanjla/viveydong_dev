import { UserPen } from 'lucide-react';
const SidebarHeader = ({ onAddCollection }) => (
  <div className="p-4 border-b flex border-gray-700">
    <div><UserPen /></div>
    <div className="">welcome</div>
   <div><h1 className="font-bold text-2xl">Profile</h1></div>
  </div>
);

export default SidebarHeader;