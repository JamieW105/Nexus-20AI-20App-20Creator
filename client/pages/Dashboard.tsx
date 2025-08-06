import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Search,
  Code,
  Globe,
  Settings,
  User,
  LogOut,
  Folder,
  Calendar,
  MoreVertical,
  ExternalLink,
  Copy,
  Trash2,
  Edit3,
  Star,
  TrendingUp,
} from "lucide-react";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock project data
  const projects = [
    {
      id: "1",
      name: "E-commerce Store",
      description: "Modern React e-commerce with Stripe integration",
      image: "/api/placeholder/400/240",
      lastModified: "2 hours ago",
      status: "deployed",
      views: 1234,
      starred: true,
    },
    {
      id: "2",
      name: "Task Manager App",
      description: "Kanban-style task management with drag & drop",
      image: "/api/placeholder/400/240",
      lastModified: "1 day ago",
      status: "development",
      views: 567,
      starred: false,
    },
    {
      id: "3",
      name: "Portfolio Website",
      description: "Personal portfolio with 3D animations",
      image: "/api/placeholder/400/240",
      lastModified: "3 days ago",
      status: "deployed",
      views: 890,
      starred: true,
    },
    {
      id: "4",
      name: "AI Chat Bot",
      description: "Intelligent chatbot with GPT integration",
      image: "/api/placeholder/400/240",
      lastModified: "1 week ago",
      status: "paused",
      views: 234,
      starred: false,
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "deployed":
        return "text-green-400 bg-green-400/20";
      case "development":
        return "text-blue-400 bg-blue-400/20";
      case "paused":
        return "text-yellow-400 bg-yellow-400/20";
      default:
        return "text-gray-400 bg-gray-400/20";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="glass border-b border-cosmic-purple/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-cosmic rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-glow">AI Builder</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/dashboard"
                className="text-cosmic-white hover:text-cosmic-cyan transition-colors"
              >
                Dashboard
              </Link>
              <a
                href="#"
                className="text-cosmic-white/70 hover:text-cosmic-white transition-colors"
              >
                Templates
              </a>
              <a
                href="#"
                className="text-cosmic-white/70 hover:text-cosmic-white transition-colors"
              >
                Integrations
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-cosmic-white hover:bg-cosmic-purple/20"
            >
              <Settings className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-cosmic-white hover:bg-cosmic-purple/20"
            >
              <User className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-cosmic-white hover:bg-cosmic-purple/20"
            >
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-glow mb-2">
            Welcome back! 👋
          </h1>
          <p className="text-cosmic-white/70 text-lg">
            Continue building amazing projects with AI assistance
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            {
              label: "Total Projects",
              value: "12",
              icon: <Folder className="w-6 h-6" />,
              color: "cyan",
            },
            {
              label: "Active Projects",
              value: "8",
              icon: <Code className="w-6 h-6" />,
              color: "purple",
            },
            {
              label: "Deployed",
              value: "6",
              icon: <Globe className="w-6 h-6" />,
              color: "green",
            },
            {
              label: "Total Views",
              value: "2.9k",
              icon: <TrendingUp className="w-6 h-6" />,
              color: "lavender",
            },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="glass-purple rounded-2xl p-6 cosmic-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-xl ${
                    stat.color === "cyan"
                      ? "bg-cosmic-cyan/20 text-cosmic-cyan"
                      : stat.color === "purple"
                        ? "bg-cosmic-purple/20 text-cosmic-purple"
                        : stat.color === "green"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-cosmic-lavender/20 text-cosmic-lavender"
                  }`}
                >
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-cosmic-white mb-1">
                {stat.value}
              </div>
              <div className="text-cosmic-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search and Create */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cosmic-white/50" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 glass border-cosmic-purple/30 bg-transparent text-cosmic-white placeholder-cosmic-white/50 focus:border-cosmic-purple focus:ring-cosmic-purple/50"
            />
          </div>

          <Link to="/builder">
            <Button className="gradient-cosmic hover:gradient-cosmic-hover glow-purple px-6 h-12">
              <Plus className="w-5 h-5 mr-2" />
              Create New Project
            </Button>
          </Link>
        </div>

        {/* Usage Indicator */}
        <div className="glass-purple rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-cosmic-white">
                Plan Usage
              </h3>
              <p className="text-cosmic-white/70 text-sm">
                Free Plan - 1 of 1 sites used
              </p>
            </div>
            <Button
              variant="outline"
              className="border-cosmic-purple text-cosmic-white hover:bg-cosmic-purple/20"
            >
              Upgrade Plan
            </Button>
          </div>
          <div className="w-full bg-cosmic-slate/50 rounded-full h-2">
            <div
              className="bg-gradient-cosmic h-2 rounded-full"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>

        {/* Projects Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-cosmic-white">
              Your Projects
            </h2>
            <div className="flex items-center space-x-2 text-cosmic-white/70">
              <span className="text-sm">
                {filteredProjects.length} projects
              </span>
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-cosmic-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-cosmic-purple" />
              </div>
              <p className="text-cosmic-white/70">
                No projects found matching your search.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="glass-purple rounded-2xl overflow-hidden cosmic-hover group"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-cosmic-purple/20 to-cosmic-blue/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Globe className="w-16 h-16 text-cosmic-white/30" />
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 bg-black/50 hover:bg-black/70"
                      >
                        <MoreVertical className="w-4 h-4 text-white" />
                      </Button>
                    </div>

                    {/* Star */}
                    {project.starred && (
                      <div className="absolute bottom-4 right-4">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-cosmic-white group-hover:text-cosmic-cyan transition-colors">
                        {project.name}
                      </h3>
                    </div>

                    <p className="text-cosmic-white/70 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-cosmic-white/50 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{project.lastModified}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>{project.views} views</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <Link to={`/builder/${project.id}`} className="flex-1">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-cosmic-purple/30 text-cosmic-white hover:bg-cosmic-purple/20"
                        >
                          <Edit3 className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-cosmic-purple/30 text-cosmic-white hover:bg-cosmic-purple/20"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-cosmic-purple/30 text-cosmic-white hover:bg-cosmic-purple/20"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Create New Project Card */}
              <Link to="/builder">
                <div className="glass border-2 border-dashed border-cosmic-purple/30 rounded-2xl h-full min-h-[320px] flex flex-col items-center justify-center cosmic-hover group">
                  <div className="w-16 h-16 bg-gradient-cosmic rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Plus className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-cosmic-white mb-2">
                    Create New Project
                  </h3>
                  <p className="text-cosmic-white/70 text-sm text-center">
                    Start building your next amazing project with AI assistance
                  </p>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
