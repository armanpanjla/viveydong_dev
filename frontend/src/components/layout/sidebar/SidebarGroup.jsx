// Add = [] to the items prop
 const SidebarGroup = ({ items = [], onSelect, title }) => {
    return (
        <div className="py-4">
            {title && (
                <p className="px-4 text-xs font-semibold text-slate-500 uppercase mb-2">
                    {title}
                </p>
            )}
            <div className="space-y-1">
                {/* Optional Chaining (?.) makes it even safer */}
                {items?.length > 0 ? (
                    items.map((item) => (
                        <button
                            key={item._id}
                            onClick={() => onSelect(item._id)}
                            className="w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-800"
                        >
                            📁 {item.name}
                        </button>
                    ))
                ) : (
                    <p className="px-4 text-sm text-slate-600 italic">No collections found</p>
                )}
            </div>
        </div>
    );
};
export default SidebarGroup;