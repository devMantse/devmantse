import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { Palette, Type, Eye, Code, Zap } from 'lucide-react'
import { useThemeStore } from '@/stores/themeStore'

export const PlaygroundModule: React.FC = () => {
  const { colorPalette, typographySize, setColorPalette, setTypographySize } = useThemeStore()
  const [activeDemo, setActiveDemo] = useState('theme')

  const colorPalettes = [
    { id: 'blue', name: 'Ocean Blue', colors: ['#3b82f6', '#1e40af', '#1e3a8a'] },
    { id: 'purple', name: 'Royal Purple', colors: ['#8b5cf6', '#7c3aed', '#6d28d9'] },
    { id: 'green', name: 'Forest Green', colors: ['#10b981', '#059669', '#047857'] },
    { id: 'orange', name: 'Sunset Orange', colors: ['#f97316', '#ea580c', '#dc2626'] },
  ]

  const typographySizes = [
    { id: 'compact', name: 'Compact', description: 'Dense, information-rich' },
    { id: 'default', name: 'Default', description: 'Balanced and readable' },
    { id: 'comfortable', name: 'Comfortable', description: 'Spacious and accessible' },
  ]

  return (
    <div className="container mx-auto p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Playground</h1>
          <p className="text-muted-foreground">
            Interactive demos, theme customization, and experimental features.
          </p>
        </div>

        <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="theme" className="flex items-center space-x-2">
              <Palette className="h-4 w-4" />
              <span>Theme</span>
            </TabsTrigger>
            <TabsTrigger value="typography" className="flex items-center space-x-2">
              <Type className="h-4 w-4" />
              <span>Typography</span>
            </TabsTrigger>
            <TabsTrigger value="components" className="flex items-center space-x-2">
              <Eye className="h-4 w-4" />
              <span>Components</span>
            </TabsTrigger>
            <TabsTrigger value="code" className="flex items-center space-x-2">
              <Code className="h-4 w-4" />
              <span>Code</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="theme" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Palette className="h-5 w-5" />
                    <span>Color Palette</span>
                  </CardTitle>
                  <CardDescription>
                    Choose your preferred color scheme
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {colorPalettes.map((palette) => (
                    <motion.div
                      key={palette.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          colorPalette === palette.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => setColorPalette(palette.id as any)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex space-x-1">
                            {palette.colors.map((color, index) => (
                              <div
                                key={index}
                                className="w-6 h-6 rounded-full"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                          <div>
                            <h4 className="font-medium">{palette.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {palette.id === colorPalette ? 'Active' : 'Click to apply'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5" />
                    <span>Live Preview</span>
                  </CardTitle>
                  <CardDescription>
                    See your changes in real-time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-primary text-primary-foreground">
                      <h4 className="font-semibold">Primary Button</h4>
                      <p className="text-sm opacity-90">This is how your primary color looks</p>
                    </div>
                    <div className="p-4 rounded-lg bg-secondary text-secondary-foreground">
                      <h4 className="font-semibold">Secondary Card</h4>
                      <p className="text-sm opacity-90">Secondary color preview</p>
                    </div>
                    <div className="p-4 rounded-lg border border-border">
                      <h4 className="font-semibold">Default Card</h4>
                      <p className="text-sm text-muted-foreground">Standard card styling</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="typography" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Type className="h-5 w-5" />
                    <span>Typography Scale</span>
                  </CardTitle>
                  <CardDescription>
                    Adjust text size and spacing
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {typographySizes.map((size) => (
                    <motion.div
                      key={size.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          typographySize === size.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => setTypographySize(size.id as any)}
                      >
                        <h4 className="font-medium">{size.name}</h4>
                        <p className="text-sm text-muted-foreground">{size.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Typography Preview</CardTitle>
                  <CardDescription>
                    See how your typography choices look
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-4xl font-bold mb-2">Heading 1</h1>
                      <h2 className="text-3xl font-semibold mb-2">Heading 2</h2>
                      <h3 className="text-2xl font-medium mb-2">Heading 3</h3>
                      <h4 className="text-xl font-medium mb-2">Heading 4</h4>
                    </div>
                    <div>
                      <p className="text-base mb-2">
                        This is a paragraph with regular text. It demonstrates the body text styling
                        and how it looks with your current typography settings.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        This is smaller text, typically used for captions and secondary information.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="components" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Interactive Components</CardTitle>
                  <CardDescription>
                    Test various UI components
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full">Primary Button</Button>
                  <Button variant="outline" className="w-full">Outline Button</Button>
                  <Button variant="secondary" className="w-full">Secondary Button</Button>
                  <Button variant="ghost" className="w-full">Ghost Button</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Form Elements</CardTitle>
                  <CardDescription>
                    Input and control components
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="demo-switch" />
                    <label htmlFor="demo-switch" className="text-sm">
                      Toggle switch
                    </label>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Input field</label>
                    <input
                      type="text"
                      placeholder="Type something..."
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Status Indicators</CardTitle>
                  <CardDescription>
                    Various status and feedback elements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Online</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Away</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Offline</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="code" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5" />
                  <span>Code Snippets</span>
                </CardTitle>
                <CardDescription>
                  Interactive code examples and demos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">React Component Example</h4>
                    <pre className="text-sm overflow-x-auto">
                      <code>{`import React from 'react'
import { motion } from 'framer-motion'

export const AnimatedCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <h2>Hello World!</h2>
    </motion.div>
  )
}`}</code>
                    </pre>
                  </div>

                  <div className="bg-muted p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">CSS Animation</h4>
                    <pre className="text-sm overflow-x-auto">
                      <code>{`.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}`}</code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}
