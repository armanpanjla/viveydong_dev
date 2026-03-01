import SidebarFooter from "./SidebarFooter";
import SidebarGroup from "./SidebarGroup";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {




    return (
        <div className="flex flex-col  ml-6 w-2/12">
            <SidebarHeader/>
            <SidebarGroup/>
            <SidebarFooter/>
        </div>
    )
}

export default Sidebar;