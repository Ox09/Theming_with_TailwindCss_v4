import { Users, Camera, Plus } from "lucide-react";

export default function ProfileCard() {
    return (
        <div className="max-w-sm mx-auto dark:bg-dark-background wine:bg-wine-background rounded-3xl shadow-lg overflow-hidden">
            {/* Profile Image */}
            <div className="bg-hover p-2 flex justify-center">
                <div className="h-[350px] rounded-3xl overflow-hidden shadow-md shadow-shadow">
                    <img
                        src="https://cdn.pixabay.com/photo/2021/07/14/19/18/woman-6466907_1280.jpg"
                        alt="Sophie Bennett"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Profile Info */}
            <div className="p-6">
                {/* Name with verification badge */}
                <div className="flex items-center justify-center mb-3">
                    <h2 className="text-2xl font-bold text-foreground mr-2">
                        Sophie Bennett
                    </h2>
                    <div className="w-6 h-6 dark:bg-dark-accent wine:bg-wine-accent rounded-full flex items-center justify-center">
                        <svg
                            className="w-4 h-4 dark:text-dark-accent-foreground wine:text-wine-accent-foreground"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>

                {/* Bio */}
                <p className="dark:text-dark-foreground/70 wine:text-wine-foreground/70 text-center mb-6 leading-relaxed">
                    Product Designer who focuses
                    <br />
                    on simplicity & usability.
                </p>

                {/* Stats and Follow Button */}
                <div className="flex items-center justify-between">
                    {/* Followers */}
                    <div className="flex items-center dark:text-dark-foreground/80 wine:text-wine-foreground/80">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="font-semibold">312</span>
                    </div>

                    {/* Posts */}
                    <div className="flex items-center dark:text-dark-foreground/80 wine:text-wine-foreground/80">
                        <Camera className="w-4 h-4 mr-1" />
                        <span className="font-semibold">48</span>
                    </div>

                    {/* Follow Button */}
                    <button className="flex items-center dark:bg-dark-accent wine:bg-wine-accent dark:hover:bg-dark-hover wine:hover:bg-wine-hover transition-colors duration-200 px-4 py-2 rounded-full text-white font-medium shadow shadow-shadow cursor-pointer">
                        <span>Follow</span>
                        <Plus className="w-4 h-4 ml-1" />
                    </button>
                </div>
            </div>
        </div>
    );
}