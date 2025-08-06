import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Code,
  Mail,
  Lock,
  User,
  Github,
  Chrome,
  ArrowLeft,
  Eye,
  EyeOff,
  Check,
} from "lucide-react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const passwordRequirements = [
    { met: formData.password.length >= 8, text: "At least 8 characters" },
    { met: /[A-Z]/.test(formData.password), text: "One uppercase letter" },
    { met: /[0-9]/.test(formData.password), text: "One number" },
    {
      met: /[^A-Za-z0-9]/.test(formData.password),
      text: "One special character",
    },
  ];

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
              animationDuration: `${3 + Math.random() * 4}s`,
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

      {/* Sign Up Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="glass-purple rounded-3xl p-8 glow-purple">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-cosmic rounded-2xl flex items-center justify-center glow-purple">
                <Code className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-glow mb-2">
              Create Account
            </h1>
            <p className="text-cosmic-white/70">Start building with AI today</p>
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
              <span className="px-4 bg-cosmic-slate text-cosmic-white/70">
                Or create with email
              </span>
            </div>
          </div>

          {/* Sign Up Form */}
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-cosmic-white/90">
                Full Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cosmic-white/50" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="pl-10 h-12 glass border-cosmic-purple/30 bg-transparent text-cosmic-white placeholder-cosmic-white/50 focus:border-cosmic-purple focus:ring-cosmic-purple/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-cosmic-white/90">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cosmic-white/50" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10 h-12 glass border-cosmic-purple/30 bg-transparent text-cosmic-white placeholder-cosmic-white/50 focus:border-cosmic-purple focus:ring-cosmic-purple/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-cosmic-white/90">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cosmic-white/50" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 pr-10 h-12 glass border-cosmic-purple/30 bg-transparent text-cosmic-white placeholder-cosmic-white/50 focus:border-cosmic-purple focus:ring-cosmic-purple/50"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cosmic-white/50 hover:text-cosmic-white transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Password Requirements */}
              {formData.password && (
                <div className="space-y-1 mt-2">
                  {passwordRequirements.map((req, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-xs"
                    >
                      <div
                        className={`w-3 h-3 rounded-full flex items-center justify-center ${
                          req.met ? "bg-green-500" : "bg-cosmic-white/20"
                        }`}
                      >
                        {req.met && <Check className="w-2 h-2 text-white" />}
                      </div>
                      <span
                        className={
                          req.met ? "text-green-400" : "text-cosmic-white/50"
                        }
                      >
                        {req.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-cosmic-white/90">
                Confirm Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cosmic-white/50" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="pl-10 pr-10 h-12 glass border-cosmic-purple/30 bg-transparent text-cosmic-white placeholder-cosmic-white/50 focus:border-cosmic-purple focus:ring-cosmic-purple/50"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-cosmic-white/50 hover:text-cosmic-white transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {formData.confirmPassword &&
                formData.password !== formData.confirmPassword && (
                  <p className="text-red-400 text-xs">Passwords don't match</p>
                )}
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-1 rounded border-cosmic-purple/30 bg-transparent text-cosmic-purple focus:ring-cosmic-purple/50"
              />
              <Label
                htmlFor="terms"
                className="text-sm text-cosmic-white/70 leading-relaxed"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-cosmic-cyan hover:text-cosmic-lavender transition-colors"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-cosmic-cyan hover:text-cosmic-lavender transition-colors"
                >
                  Privacy Policy
                </a>
              </Label>
            </div>

            <Link to="/dashboard">
              <Button
                className="w-full h-12 gradient-cosmic hover:gradient-cosmic-hover glow-purple text-lg font-semibold"
                disabled={
                  !acceptTerms ||
                  formData.password !== formData.confirmPassword ||
                  !passwordRequirements.every((req) => req.met)
                }
              >
                Create Account
              </Button>
            </Link>
          </form>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-cosmic-white/70">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-cosmic-cyan hover:text-cosmic-lavender transition-colors font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Additional floating elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-cosmic-cyan/20 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cosmic-lavender/20 rounded-full blur-sm animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 -left-8 w-4 h-4 bg-cosmic-purple/20 rounded-full blur-sm animate-pulse delay-500"></div>
      </div>
    </div>
  );
}
