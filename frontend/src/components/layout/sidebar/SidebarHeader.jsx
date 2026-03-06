const SidebarHeader = () => {
    const handleAddCollection = () => {
        const name = prompt("Enter new collection name:");
        if (name) {
            // We'll connect this to your createCollection service later
            console.log("Creating collection:", name);
        }
    };

    return (
        <div className="p-4 border-b border-slate-800 flex justify-between items-center">
            <h1 className="text-xl font-bold text-white tracking-tight">DonghuaLog</h1>
            <button 
                onClick={handleAddCollection}
                className="bg-blue-600 hover:bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center transition"
            >
                +
            </button>
        </div>
    );
};
export default SidebarHeader;