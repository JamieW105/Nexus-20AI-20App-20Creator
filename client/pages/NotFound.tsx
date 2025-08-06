import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      {/* Floating particles background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
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

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="glass-purple rounded-3xl p-12 glow-purple">
          {/* 404 Animation */}
          <div className="mb-8">
            <div className="text-8xl font-bold bg-gradient-to-r from-cosmic-purple to-cosmic-cyan bg-clip-text text-transparent animate-pulse">
              404
            </div>
            <div className="flex justify-center mt-4">
              <Sparkles className="w-8 h-8 text-cosmic-cyan animate-spin" />
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl font-bold text-glow mb-4">
            Page Not Found
          </h1>
          <p className="text-cosmic-white/70 text-lg mb-8 leading-relaxed">
            Looks like this page got lost in the cosmic void. 
            The page you're looking for doesn't exist or has been moved to another dimension.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="gradient-cosmic hover:gradient-cosmic-hover glow-purple">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="border-cosmic-purple text-cosmic-white hover:bg-cosmic-purple/20"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Help Text */}
          <div className="mt-8 pt-6 border-t border-cosmic-purple/20">
            <p className="text-cosmic-white/50 text-sm">
              Need help? Contact our support team or visit our documentation.
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
