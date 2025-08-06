import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Code, 
  Mail, 
  Lock, 
  Github, 
  Chrome,
  ArrowLeft,
  Eye,
  EyeOff
} from "lucide-react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      {/* Floating particles background */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cosmic-cyan rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Back button */}
      <Link 
        to="/" 
        className="absolute top-8 left-8 z-20 glass rounded-full p-3 cosmic-hover group"
      >
        <ArrowLeft className="w-5 h-5 text-cosmic-white group-hover:text-cosmic-cyan transition-colors" />
      </Link>

      {/* Sign In Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="glass-purple rounded-3xl p-8 glow-purple">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-cosmic rounded-2xl flex items-center justify-center glow-purple">
                <Code className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-glow mb-2">Welcome Back</h1>
            <p className="text-cosmic-white/70">Sign in to continue building with AI</p>
          </div>

          {/* OAuth Buttons */}
          <div className="space-y-3 mb-6">
            <Button 
              variant="outline" 
              className="w-full h-12 glass border-cosmic-purple/30 hover:border-cosmic-purple/50 hover:bg-cosmic-purple/10 text-cosmic-white"
            >
              <Github className="w-5 h-5 mr-3" />
              Continue with GitHub
            </Button>
            <Button 
              variant="outline" 
              className="w-full h-12 glass border-cosmic-purple/30 hover:border-cosmic-purple/50 hover:bg-cosmic-purple/10 text-cosmic-white"
            >
              <Chrome className="w-5 h-5 mr-3" />
              Continue with Google
            </Button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-cosmic-purple/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-cosmic-slate text-cosmic-white/70">Or continue with email</span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-cosmic-white/90">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cosmic-white/50" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 glass border-cosmic-purple/30 bg-transparent text-cosmic-white placeholder-cosmic-white/50 focus:border-cosmic-purple focus:ring-cosmic-purple/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-cosmic-white/90">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cosmic-white/50" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12 glass border-cosmic-purple/30 bg-transparent text-cosmic-white placeholder-cosmic-white/50 focus:border-cosmic-purple focus:ring-cosmic-purple/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cosmic-white/50 hover:text-cosmic-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="rounded border-cosmic-purple/30 bg-transparent text-cosmic-purple focus:ring-cosmic-purple/50"
                />
                <Label htmlFor="remember" className="text-sm text-cosmic-white/70">
                  Remember me
                </Label>
              </div>
              <a href="#" className="text-sm text-cosmic-cyan hover:text-cosmic-lavender transition-colors">
                Forgot password?
              </a>
            </div>

            <Link to="/dashboard">
              <Button className="w-full h-12 gradient-cosmic hover:gradient-cosmic-hover glow-purple text-lg font-semibold">
                Sign In
              </Button>
            </Link>
          </form>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-cosmic-white/70">
              Don't have an account?{" "}
              <Link to="/signup" className="text-cosmic-cyan hover:text-cosmic-lavender transition-colors font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Additional floating elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-cosmic-cyan/20 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cosmic-lavender/20 rounded-full blur-sm animate-pulse delay-1000"></div>
      </div>
    </div>
  );
}
