import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Play, Video, ExternalLink } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const topNegotiationVideos = [{
  title: "NEVER Split The Difference | Chris Voss | TEDxUniversityofNevada",
  views: "8.2M views",
  link: "https://www.youtube.com/watch?v=MjhDkNmtjxQ",
  channel: "TEDx Talks"
}, {
  title: "The Harvard Principles of Negotiation",
  views: "4.1M views",
  link: "https://www.youtube.com/watch?v=RfTalFEeKKE",
  channel: "MasterTalks"
}, {
  title: "Negotiation Skills: 3 Simple Tips On How To Negotiate",
  views: "3.8M views",
  link: "https://www.youtube.com/watch?v=GPrYyn8VgdE",
  channel: "Life Skills That Matter"
}, {
  title: "How to Negotiate: NEVER SPLIT THE DIFFERENCE by Chris Voss | Core Message",
  views: "2.9M views",
  link: "https://www.youtube.com/watch?v=d-LOtXyErzE",
  channel: "Productivity Game"
}, {
  title: "FBI Negotiator's 6 Secrets For WINNING ANY EXCHANGE In Life",
  views: "2.7M views",
  link: "https://www.youtube.com/watch?v=YxZFvW6tS88",
  channel: "Impact Theory"
}];

export default function Negotiation() {
  const [scenario, setScenario] = useState("");

  const handleSubmit = () => {
    console.log("Scenario submitted:", scenario);
  };

  return <div className="min-h-screen p-4 space-y-6">
      <Navigation />
      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-6">
          <h1 className="text-2xl font-semibold mb-4 text-left">Negotiation</h1>
          <p className="text-gray-700 leading-relaxed mb-6 text-left">Negotiation can be a powerful tool to get what you deserve—don't leave anything on the table, but also don't risk your position.</p>
          
          <Tabs defaultValue="knowledge" className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="knowledge" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Knowledge
              </TabsTrigger>
              <TabsTrigger value="simulator" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                Simulator
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Video className="w-4 h-4" />
                Videos
              </TabsTrigger>
            </TabsList>
            <TabsContent value="knowledge" className="mt-4">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4 text-left">Mastering Negotiation: Key Concepts for Everyday Success</h2>
                <p className="text-gray-700 mb-6 text-left">Negotiation is a skill everyone uses daily, whether discussing chores with a partner, asking for a raise, or buying a car. This guide breaks down essential negotiation concepts in simple terms, with real-world examples and resources to help you become a confident negotiator.</p>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-xl font-semibold mb-3 text-left">What is Negotiation?</h3>
                    <p className="text-gray-700 text-left">Negotiation is a conversation where two or more parties work together to find a solution that works for everyone. Think of it as a collaboration, not a battle. The goal isn't to "win" but to reach a fair agreement where all sides feel heard.</p>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3 text-left">Key Concept 1: BATNA</h3>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <h4 className="font-medium mb-2 text-left">What is BATNA?</h4>
                      <p className="text-gray-700 text-left">Your Best Alternative to a Negotiated Agreement is your backup plan if the negotiation fails. It's the best option you have without making a deal. Knowing your BATNA gives you confidence and prevents you from accepting a bad offer.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4 mb-4">
                      <h4 className="font-medium mb-2 text-left">Example:</h4>
                      <p className="text-gray-700 text-left">Imagine you're selling your car. Your BATNA might be selling it to a dealership for $8,000. If a buyer offers less than $8,000, you can walk away knowing you have a better alternative.</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3 text-left">Key Concept 2: ZOPA</h3>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <h4 className="font-medium mb-2 text-left">What is ZOPA?</h4>
                      <p className="text-gray-700 text-left">Zone of Possible Agreement is the "sweet spot" where both parties' needs overlap. It's the range where a deal can happen.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4 mb-4">
                      <h4 className="font-medium mb-2 text-left">Example:</h4>
                      <p className="text-gray-700 text-left">Let's say you're buying a used bike. You're willing to pay up to $200 (your BATNA is walking away). The seller won't accept less than $150. The ZOPA is $150–$200—any price in this range works for both.</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3 text-left">Key Concept 3: Preparation is Everything</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-left">Steps to Prepare:</h4>
                        <ul className="list-disc pl-5 space-y-2 text-left">
                          <li>Research: Know the market. If negotiating a salary, research average pay for your role.</li>
                          <li>Prioritize: List your "must-haves" vs. "nice-to-haves."</li>
                          <li>Practice: Role-play with a friend to anticipate objections.</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-semibold mb-3 text-left">FAQ</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-left">Q: What if the other party refuses to negotiate?</h4>
                        <p className="text-gray-700 text-left">A: Use your BATNA. Example: "I'd love to work with you, but I've received another offer. Can we revisit your terms?"</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2 text-left">Q: How do I handle aggressive negotiators?</h4>
                        <p className="text-gray-700 text-left">A: Stay calm, ask questions, and focus on shared goals. Respond: "I see we both want this project done well. How can we make that happen?"</p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="simulator" className="mt-4">
              <div className="space-y-8">
                <section className="space-y-4">
                  <h3 className="text-xl font-semibold text-left">Scenario</h3>
                  <Textarea 
                    placeholder="Describe your negotiation scenario here (max 500 words)..."
                    value={scenario}
                    onChange={(e) => {
                      const words = e.target.value.trim().split(/\s+/).length;
                      if (words <= 500 || e.target.value.length < scenario.length) {
                        setScenario(e.target.value);
                      }
                    }}
                    className="min-h-[150px] resize-none"
                  />
                  <div className="text-right text-sm text-gray-500">
                    {scenario.trim() ? `${scenario.trim().split(/\s+/).length}/500 words` : '0/500 words'}
                  </div>
                  <Button onClick={handleSubmit} className="w-full">
                    Submit Scenario
                  </Button>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xl font-semibold text-left">The Negotiator</h3>
                  <p className="text-gray-700 text-left">
                    The Negotiator is a proprietary interface that allows you to practice your negotiation skills and more importantly learn how to handle sticky situations, with the ultimate goal of ensuring you are equipped when faced with a real negotiation.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-3 text-left">Instructions:</h4>
                    <ol className="list-decimal pl-5 space-y-2 text-left text-gray-700">
                      <li>Enter your scenario in the box above</li>
                      <li>Click submit</li>
                      <li>Once the negotiator has been tuned it will let you know it's ready to begin</li>
                    </ol>
                  </div>

                  <div className="border rounded-lg p-4 min-h-[200px] bg-white">
                    <p className="text-gray-500 text-center">Submit your scenario to begin the negotiation practice</p>
                  </div>
                </section>
              </div>
            </TabsContent>
            <TabsContent value="videos" className="mt-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium mb-2 text-left">Learning from the Best</h3>
                <div className="space-y-3">
                  {topNegotiationVideos.map((video, index) => <a key={index} href={video.link} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium text-blue-600 mb-1">{video.title}</h4>
                          <p className="text-sm text-gray-600 text-left">{video.channel} • {video.views}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 mt-1" />
                      </div>
                    </a>)}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>;
}
