import { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Code,
  Eye,
  MessageSquare,
  FileText,
  Folder,
  FolderOpen,
  Plus,
  Download,
  Save,
  Play,
  Settings,
  Zap,
  Bot,
  Paperclip,
  Send,
  MoreHorizontal,
  X,
  ChevronRight,
  ChevronDown,
  Home,
  Monitor,
  Smartphone,
  Globe,
  Share
} from "lucide-react";

export default function Builder() {
  const { projectId } = useParams();
  const [currentView, setCurrentView] = useState<"editor" | "preview">("editor");
  const [selectedFile, setSelectedFile] = useState<string>("app.tsx");
  const [editorContent, setEditorContent] = useState(`import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          Welcome to AI Builder
        </h1>
        <p className="text-xl text-purple-200 mb-8">
          Build amazing web applications with AI assistance
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;`);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: "ai" as const,
      content: "Hello! I'm your AI assistant. I can help you build, edit, and improve your web application. What would you like to work on?",
      timestamp: new Date()
    }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [selectedAIModel, setSelectedAIModel] = useState("claude");
  const [expandedFolders, setExpandedFolders] = useState<string[]>(["src"]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const fileTree = [
    {
      name: "src",
      type: "folder" as const,
      children: [
        { name: "app.tsx", type: "file" as const, language: "typescript" },
        { name: "index.html", type: "file" as const, language: "html" },
        { name: "styles.css", type: "file" as const, language: "css" },
        {
          name: "components",
          type: "folder" as const,
          children: [
            { name: "Header.tsx", type: "file" as const, language: "typescript" },
            { name: "Footer.tsx", type: "file" as const, language: "typescript" }
          ]
        }
      ]
    },
    { name: "package.json", type: "file" as const, language: "json" },
    { name: "README.md", type: "file" as const, language: "markdown" }
  ];

  const aiModels = [
    { id: "claude", name: "Claude", color: "text-orange-400" },
    { id: "deepseek", name: "DeepSeek", color: "text-blue-400" },
    { id: "gemini", name: "Gemini", color: "text-green-400" },
    { id: "grok", name: "Grok", color: "text-purple-400" }
  ];

  const toggleFolder = (folderName: string) => {
    setExpandedFolders(prev => 
      prev.includes(folderName) 
        ? prev.filter(name => name !== folderName)
        : [...prev, folderName]
    );
  };

  const renderFileTree = (items: any[], level = 0) => {
    return items.map((item, index) => (
      <div key={`${item.name}-${level}-${index}`} style={{ paddingLeft: `${level * 16}px` }}>
        {item.type === "folder" ? (
          <div>
            <div 
              className="flex items-center space-x-2 py-1 px-2 hover:bg-cosmic-purple/20 rounded cursor-pointer group"
              onClick={() => toggleFolder(item.name)}
            >
              {expandedFolders.includes(item.name) ? (
                <ChevronDown className="w-4 h-4 text-cosmic-white/70" />
              ) : (
                <ChevronRight className="w-4 h-4 text-cosmic-white/70" />
              )}
              {expandedFolders.includes(item.name) ? (
                <FolderOpen className="w-4 h-4 text-cosmic-cyan" />
              ) : (
                <Folder className="w-4 h-4 text-cosmic-cyan" />
              )}
              <span className="text-cosmic-white/90 text-sm">{item.name}</span>
            </div>
            {expandedFolders.includes(item.name) && item.children && (
              <div>
                {renderFileTree(item.children, level + 1)}
              </div>
            )}
          </div>
        ) : (
          <div 
            className={`flex items-center space-x-2 py-1 px-2 hover:bg-cosmic-purple/20 rounded cursor-pointer group ${
              selectedFile === item.name ? 'bg-cosmic-purple/30 border-l-2 border-cosmic-purple' : ''
            }`}
            onClick={() => setSelectedFile(item.name)}
          >
            <FileText className="w-4 h-4 text-cosmic-white/70" />
            <span className="text-cosmic-white/90 text-sm">{item.name}</span>
            {selectedFile === item.name && (
              <div className="w-2 h-2 bg-cosmic-cyan rounded-full ml-auto"></div>
            )}
            <div className="opacity-0 group-hover:opacity-100 ml-auto">
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <MoreHorizontal className="w-3 h-3 text-cosmic-white/50" />
              </Button>
            </div>
          </div>
        )}
      </div>
    ));
  };

  const sendMessage = () => {
    if (!chatInput.trim()) return;

    const newMessage = {
      id: chatMessages.length + 1,
      type: "user" as const,
      content: chatInput,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, newMessage]);
    setChatInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: chatMessages.length + 2,
        type: "ai" as const,
        content: `I understand you want to: "${chatInput}". Let me help you with that. I can modify your code, add new features, or provide suggestions. Would you like me to implement this change directly in your ${selectedFile} file?`,
        timestamp: new Date()
      };
      setChatMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  return (
    <div className="h-screen flex flex-col">
      {/* Top Navigation */}
      <nav className="glass border-b border-cosmic-purple/20 backdrop-blur-xl">
        <div className="px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-cosmic rounded flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-cosmic-white">AI Builder</span>
            </Link>
            <div className="h-4 w-px bg-cosmic-purple/30"></div>
            <span className="text-cosmic-white/70 text-sm">
              {projectId ? `Project ${projectId}` : "New Project"}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-cosmic-white hover:bg-cosmic-purple/20">
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button variant="ghost" size="sm" className="text-cosmic-white hover:bg-cosmic-purple/20">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button size="sm" className="gradient-cosmic hover:gradient-cosmic-hover">
              <Share className="w-4 h-4 mr-2" />
              Deploy
            </Button>
          </div>
        </div>
      </nav>

      <div className="flex-1 flex">
        {/* Left Sidebar - File Explorer */}
        <div className="w-80 glass-purple border-r border-cosmic-purple/20 flex flex-col">
          {/* File Explorer Header */}
          <div className="p-4 border-b border-cosmic-purple/20">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-cosmic-white font-semibold">Explorer</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6 text-cosmic-white/70 hover:text-cosmic-white">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <Button
                variant={currentView === "editor" ? "default" : "ghost"}
                size="sm"
                className={`w-full justify-start ${currentView === "editor" ? "gradient-cosmic" : "text-cosmic-white/70 hover:text-cosmic-white"}`}
                onClick={() => setCurrentView("editor")}
              >
                <Code className="w-4 h-4 mr-2" />
                Code Editor
              </Button>
              <Button
                variant={currentView === "preview" ? "default" : "ghost"}
                size="sm"
                className={`w-full justify-start ${currentView === "preview" ? "gradient-cosmic" : "text-cosmic-white/70 hover:text-cosmic-white"}`}
                onClick={() => setCurrentView("preview")}
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </div>
          </div>

          {/* File Tree */}
          <div className="flex-1 p-4 overflow-y-auto">
            {renderFileTree(fileTree)}
          </div>

          {/* AI Assistant Button */}
          <div className="p-4 border-t border-cosmic-purple/20">
            <Button className="w-full gradient-cosmic hover:gradient-cosmic-hover glow-purple">
              <Zap className="w-4 h-4 mr-2" />
              Ask AI
            </Button>
          </div>
        </div>

        {/* Center Panel - Editor/Preview */}
        <div className="flex-1 flex flex-col">
          {currentView === "editor" ? (
            <>
              {/* Editor Header */}
              <div className="glass border-b border-cosmic-purple/20 px-6 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-cosmic-cyan" />
                    <span className="text-cosmic-white font-medium">{selectedFile}</span>
                  </div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" title="Unsaved changes"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="text-cosmic-white/70 hover:text-cosmic-white">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Code Editor */}
              <div className="flex-1 relative">
                <Textarea
                  value={editorContent}
                  onChange={(e) => setEditorContent(e.target.value)}
                  className="w-full h-full resize-none bg-cosmic-navy/50 border-none text-cosmic-white font-mono text-sm p-6 focus:ring-0"
                  style={{ minHeight: "100%" }}
                />
                <div className="absolute top-4 right-4 glass rounded-lg p-2">
                  <Button size="sm" className="gradient-cosmic hover:gradient-cosmic-hover">
                    <Zap className="w-4 h-4 mr-2" />
                    Ask AI
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Preview Header */}
              <div className="glass border-b border-cosmic-purple/20 px-6 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-cosmic-cyan" />
                    <span className="text-cosmic-white font-medium">Live Preview</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-cosmic-white/70 hover:text-cosmic-white">
                      <Monitor className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-cosmic-white/70 hover:text-cosmic-white">
                      <Smartphone className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-cosmic-white/70 hover:text-cosmic-white">
                  <Play className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
              </div>

              {/* Preview iframe */}
              <div className="flex-1 p-6">
                <div className="h-full glass-purple rounded-2xl glow-purple overflow-hidden">
                  <div className="h-full bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-white mb-4">
                        Welcome to AI Builder
                      </h1>
                      <p className="text-xl text-purple-200 mb-8">
                        Build amazing web applications with AI assistance
                      </p>
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Sidebar - AI Chat */}
        <div className="w-96 glass-purple border-l border-cosmic-purple/20 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-cosmic-purple/20">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-cosmic-white font-semibold flex items-center">
                <Bot className="w-5 h-5 mr-2 text-cosmic-cyan" />
                AI Assistant
              </h3>
              <Button variant="ghost" size="icon" className="h-6 w-6 text-cosmic-white/70 hover:text-cosmic-white">
                <Settings className="w-4 h-4" />
              </Button>
            </div>

            {/* AI Model Selector */}
            <div className="flex space-x-1 p-1 glass rounded-lg">
              {aiModels.map((model) => (
                <button
                  key={model.id}
                  onClick={() => setSelectedAIModel(model.id)}
                  className={`flex-1 py-2 px-3 rounded text-xs font-medium transition-all ${
                    selectedAIModel === model.id
                      ? "gradient-cosmic text-white"
                      : "text-cosmic-white/70 hover:text-cosmic-white hover:bg-cosmic-purple/20"
                  }`}
                >
                  {model.name}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.type === "user"
                      ? "bg-cosmic-purple text-white ml-4"
                      : "glass text-cosmic-white mr-4"
                  }`}
                >
                  <div className="text-sm leading-relaxed">
                    {message.content}
                  </div>
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-cosmic-purple/20">
            <div className="glass rounded-2xl p-3">
              <div className="flex items-end space-x-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-cosmic-white/70 hover:text-cosmic-white">
                  <Paperclip className="w-4 h-4" />
                </Button>
                <Textarea
                  placeholder="Ask AI to help with your code..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  className="flex-1 min-h-[2.5rem] max-h-32 bg-transparent border-none text-cosmic-white placeholder-cosmic-white/50 resize-none focus:ring-0"
                />
                <Button 
                  size="icon" 
                  className="h-8 w-8 gradient-cosmic hover:gradient-cosmic-hover"
                  onClick={sendMessage}
                  disabled={!chatInput.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
