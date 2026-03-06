import { useState, useEffect } from "react";
import  {Sidebar}  from "../components/layout/sidebar/Sidebar.jsx";


const Collection = () => {
    // 1. This state holds the ID of the folder Arman clicked in the sidebar
    const [selectedFolderId, setSelectedFolderId] = useState(null);
    const [animeList, setAnimeList] = useState([]);
    const [loading, setLoading] = useState(false);

    // 2. This runs every time a new folder is selected
    useEffect(() => {
        const fetchAnime = async () => {
            if (!selectedFolderId) return;
            
            setLoading(true);
            try {
                // We ask the backend for anime belonging to THIS specific collectionId
                const res = await getAnimeByFolder(selectedFolderId);
                setAnimeList(res.data);
            } catch (err) {
                console.error("Error fetching anime for this collection", err);
            } finally {
                setLoading(false);
            }
        };

        fetchAnime();
    }, [selectedFolderId]); // <--- The trigger

    return (
        <div className="flex h-screen w-full bg-[#0b0e14] text-white overflow-hidden">
            {/* LEFT PORTION: The Sidebar */}
            <Sidebar onSelectedFolder={(id) => setSelectedFolderId(id)} />

            {/* RIGHT PORTION: The Display Area */}
            <main className="flex-1 flex flex-col overflow-y-auto p-8">
                {selectedFolderId ? (
                    <>
                        <header className="mb-8">
                            <h2 className="text-3xl font-bold">Collection View</h2>
                            <p className="text-slate-400">Manage your tracking list here.</p>
                        </header>

                        {loading ? (
                            <div className="flex justify-center items-center h-64">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {animeList.map((anime) => (
                                    <AnimeCard key={anime._id} anime={anime} />
                                ))}
                            </div>
                        )}

                        {animeList.length === 0 && !loading && (
                            <div className="text-center mt-20 text-slate-500">
                                <p className="text-4xl mb-4">📺</p>
                                <p>This collection is empty. Add some Donghua!</p>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-slate-500">
                        <h2 className="text-2xl font-semibold">Welcome back, Arman</h2>
                        <p>Select a folder from the sidebar to view your progress.</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Collection;