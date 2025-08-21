import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Camera,
  Globe,
  Package,
  Rocket,
  Ship,
  Zap,
  CheckCircle,
  Home as HomeIcon,
  Search,
  Settings,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Left Sidebar Navigation */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen p-6">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Camera className="w-8 h-8 text-black" />
              <h1 className="text-xl font-bold text-black">Instagram Clone</h1>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-2">
            <Link
              href="/"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <HomeIcon className="w-5 h-5" />
              <span className="font-medium">Home</span>
            </Link>

            <Link
              href="/posts"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              <Search className="w-5 h-5" />
              <span>Search</span>
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </Link>
          </nav>

          {/* Tech Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2">Built with:</p>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Zap className="w-3 h-3" />
                <span>Next.js 15</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Package className="w-3 h-3" />
                <span>Turborepo</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Ship className="w-3 h-3" />
                <span>Docker</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-2xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome to Instagram Clone
              </h2>
              <p className="text-lg text-gray-600">
                A modern social media platform built with cutting-edge
                technologies.
              </p>
            </div>

            {/* Features Section */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-5 h-5 text-gray-700" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Features Demo
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Next.js 15 App Router
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Server-Side Rendering (SSR)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Static Site Generation (SSG)
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Docker containerization
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Turborepo monorepo
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Modern UI Components
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                <Link href="/posts" className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  View Posts (SSR Demo)
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <Link href="/about" className="flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  About (SSG Demo)
                </Link>
              </Button>
            </div>

            {/* Status Footer */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                <Ship className="w-4 h-4" />
                Running in Docker •
                <Rocket className="w-4 h-4" />
                Ready for Cloud Run
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
