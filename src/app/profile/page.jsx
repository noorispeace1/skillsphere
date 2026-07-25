"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { User, Mail, Calendar, LogOut, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState("");
  const [editImage, setEditImage] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/auth/login");
    }
  }, [session, isPending, router]);

  const handleEditClick = () => {
    setEditName(user?.name || "");
    setEditImage(user?.image || "");
    setIsEditing(true);
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      const { data, error } = await authClient.updateUser({
        name: editName,
        image: editImage || undefined,
      });

      if (error) {
        toast.error(error.message || "Failed to update profile");
      } else {
        toast.success("Profile updated successfully!");
        setIsEditing(false);
      }
    } catch (err) {
      toast.error("An unexpected error occurred");
    } finally {
      setIsUpdating(false);
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-indigo-500 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-12 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-white">My Profile</h1>
          {!isEditing && (
            <Button 
              className="bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-colors"
              radius="full"
              onClick={handleEditClick}
            >
              Edit Profile
            </Button>
          )}
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>

          {isEditing ? (
            <form onSubmit={handleUpdateProfile} className="relative z-10 space-y-6">
              <div>
                <label className="block text-gray-300 font-medium pb-2 text-sm">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-950/50 border border-gray-700 text-white rounded-xl px-4 py-3.5 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-lg"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 font-medium pb-2 text-sm">Avatar Photo URL</label>
                <input
                  type="url"
                  className="w-full bg-gray-950/50 border border-gray-700 text-white rounded-xl px-4 py-3.5 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-lg"
                  value={editImage}
                  onChange={(e) => setEditImage(e.target.value)}
                  placeholder="https://example.com/avatar.jpg"
                />
                <p className="text-xs text-gray-500 mt-2">Leave blank to use default avatar.</p>
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button 
                  type="button"
                  variant="flat"
                  className="flex-1 bg-gray-800 text-gray-300 hover:bg-gray-700"
                  radius="lg"
                  size="lg"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold"
                  radius="lg"
                  size="lg"
                  isLoading={isUpdating}
                >
                  Save Changes
                </Button>
              </div>
            </form>
          ) : (
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "User"}
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    className="object-cover rounded-full border-4 border-gray-800 shadow-xl"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-full border-4 border-gray-800 shadow-xl flex items-center justify-center text-4xl font-bold text-white">
                    {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                  </div>
                )}
              </div>

              {/* User Info */}
              <div className="flex-1 text-center md:text-left space-y-4 w-full">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{user.name}</h2>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium border border-indigo-500/20">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Active Student
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-3 bg-gray-950/50 p-4 rounded-xl border border-gray-800/50">
                    <div className="p-2 bg-gray-900 rounded-lg shrink-0">
                      <User className="text-indigo-400" size={20} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Full Name</p>
                      <p className="text-gray-200 font-medium truncate">{user.name}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-gray-950/50 p-4 rounded-xl border border-gray-800/50">
                    <div className="p-2 bg-gray-900 rounded-lg shrink-0">
                      <Mail className="text-purple-400" size={20} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Email Address</p>
                      <p className="text-gray-200 font-medium truncate">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-gray-950/50 p-4 rounded-xl border border-gray-800/50">
                    <div className="p-2 bg-gray-900 rounded-lg shrink-0">
                      <Calendar className="text-pink-400" size={20} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Joined On</p>
                      <p className="text-gray-200 font-medium truncate">
                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        }) : "Recently"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800/50 flex flex-col sm:flex-row gap-4">
                  <Button 
                    as={Link} 
                    href="/courses" 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold flex-1 md:flex-none"
                    radius="full"
                  >
                    Browse Courses
                  </Button>
                  
                  <Button 
                    onClick={async () => {
                      await authClient.signOut();
                      router.push("/auth/login");
                    }} 
                    color="danger"
                    variant="flat"
                    className="font-semibold flex-1 md:flex-none"
                    radius="full"
                    startContent={<LogOut size={18} />}
                  >
                    Sign Out
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
