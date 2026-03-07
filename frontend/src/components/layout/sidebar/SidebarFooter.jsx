const SidebarFooter = () => {
    return (
        <div className="p-4 border-t border-slate-800 bg-[#161922]">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-linear-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold">
                    A
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">Arman</span>
                    <span className="text-xs text-slate-500">Free Tier</span>
                </div>
            </div>
            <button 
                className="w-full text-left text-xs text-red-400 hover:text-red-300 transition"
                onClick={() => console.log("Logging out...")}
            >
                Logout
            </button>
        </div>
    );
};
export default SidebarFooter;
 