import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {  ClipboardList, HelpCircle, Phone } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { TiInfoLargeOutline } from "react-icons/ti";

export default function ConsultancySection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [activeTab, setActiveTab] = useState("quiz");

  // ... your existing questions array ...
  const questions = [
    {
      id: 'hairType',
      title: "What's your hair type?",
      options: [
        { value: 'straight', label: 'Straight' },
        { value: 'wavy', label: 'Wavy' },
        { value: 'curly', label: 'Curly' },
        { value: 'coily', label: 'Coily' }
      ]
    },
    {
      id: 'hairConcern',
      title: "What's your main hair concern?",
      options: [
        { value: 'dryness', label: 'Dryness' },
        { value: 'damage', label: 'Damage/Split Ends' },
        { value: 'frizz', label: 'Frizz' },
        { value: 'hairLoss', label: 'Hair Loss' }
      ]
    },
    {
      id: 'hairGoal',
      title: "What's your hair goal?",
      options: [
        { value: 'growth', label: 'Hair Growth' },
        { value: 'repair', label: 'Repair & Strengthen' },
        { value: 'volume', label: 'More Volume' },
        { value: 'smoothness', label: 'Smoothness & Shine' }
      ]
    }
  ];


  const getPersonalizedSchedule = () => {
    if (!answers.hairType) return null;

    const schedule = {
      monday: { task: "", products: [] },
      wednesday: { task: "", products: [] },
      saturday: { task: "", products: [] },
      sunday: { task: "", products: [] },
    };

    // Your existing schedule logic
    switch (answers.hairType) {
      case 'straight':
        schedule.wednesday = {
          task: "Deep Conditioning Treatment",
          products: ["Moisturizing Conditioner", "Hair Serum"]
        };
        schedule.sunday = {
          task: "Regular Wash & Care",
          products: ["Gentle Shampoo", "Light Conditioner"]
        };
        break;
      case 'wavy':
        schedule.wednesday = {
          task: "Protein Treatment",
          products: ["Protein Mask", "Leave-in Conditioner"]
        };
        schedule.sunday = {
          task: "Hydration Routine",
          products: ["Sulfate-free Shampoo", "Moisture Mask"]
        };
        break;
      case 'curly':
        schedule.monday = {
          task: "Co-Wash Day",
          products: ["Cleansing Conditioner", "Curl Cream"]
        };
        schedule.thursday = {
          task: "Deep Conditioning",
          products: ["Deep Conditioner", "Curl Activator"]
        };
        schedule.sunday = {
          task: "Reset Wash Day",
          products: ["Clarifying Shampoo", "Deep Treatment"]
        };
        break;
      case 'coily':
        schedule.monday = {
          task: "Moisturizing Treatment",
          products: ["Hair Oil", "Leave-in Conditioner"]
        };
        schedule.thursday = {
          task: "Deep Conditioning",
          products: ["Intensive Mask", "Butter Cream"]
        };
        schedule.sunday = {
          task: "Wash & Treatment Day",
          products: ["Moisturizing Shampoo", "Deep Conditioner"]
        };
        break;
      default:
        break;
    }

    return schedule;
  };

  const handleAnswer = (value) => {
    const newAnswers = {
      ...answers,
      [questions[currentQuestion].id]: value
    };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setActiveTab("results");
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setActiveTab("quiz");
  };

  return (
    <>
      {/* Floating Info Button */}
      <button
        onClick={() => setIsDialogOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Open Hair Quiz"
      >
        <TiInfoLargeOutline className="w-6 h-6" />
        <span className="absolute right-full mr-3 bg-black/75 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Hair Care Guide
        </span>
      </button>

      {/* Dialog with Tabs */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] p-0 [&>button]:hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="bg-black py-3 px-4">
              <TabsList className="bg-black/40 w-full">
                <TabsTrigger 
                  value="quiz" 
                  className="data-[state=active]:bg-white data-[state=active]:text-black text-white"
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Hair Quiz
                </TabsTrigger>
                <TabsTrigger 
                  value="results" 
                  className="data-[state=active]:bg-white data-[state=active]:text-black text-white"
                  disabled={!answers.hairType}
                >
                  <ClipboardList className="w-4 h-4 mr-2" />
                  Your Results
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="quiz" className="m-0">
              <div className="p-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center mb-6">
                    {questions[currentQuestion].title}
                  </DialogTitle>
                </DialogHeader>

                <div className="mt-4">
                  <RadioGroup
                    onValueChange={handleAnswer}
                    className="grid gap-4"
                  >
                    {questions[currentQuestion].options.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                          className="text-primary"
                        />
                        <Label
                          htmlFor={option.value}
                          className="flex-1 cursor-pointer font-medium"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  <div className="mt-6 text-center text-sm text-gray-500">
                    Question {currentQuestion + 1} of {questions.length}
                  </div>

                  {currentQuestion > 0 && (
                    <Button
                      variant="outline"
                      className="mt-4 w-full"
                      onClick={() => setCurrentQuestion(prev => prev - 1)}
                    >
                      Previous Question
                    </Button>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="results" className="m-0 outline-none">
              <div className="max-h-[80vh] overflow-y-auto">
                {/* Expert Suggestion Strip */}
                <div className="bg-black py-4 px-4 sticky top-0 z-10">
                  <h2 className="text-yellow-700 text-center text-lg sm:text-xl font-semibold tracking-wider">
                    TSP EXPERTS SUGGESTION
                  </h2>
                </div>

                <div className="p-6">
                  {/* Personalized Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-10"
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      Your Personalized Hair Care Schedule
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Based on your {answers.hairType} hair type and concern with {answers.hairConcern}, 
                      we've created a customized weekly care routine for optimal results.
                    </p>
                  </motion.div>

                  {/* Weekly Schedule */}
                  <div className="grid gap-6 md:grid-cols-2">
                    {Object.entries(getPersonalizedSchedule() || {}).map(([day, routine], index) => (
                      routine.task && (
                        <motion.div
                          key={day}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <h4 className="text-lg font-semibold text-primary capitalize mb-3">
                            {day}
                          </h4>
                          <div className="space-y-4">
                            <div>
                              <p className="font-medium text-gray-900">{routine.task}</p>
                              <ul className="mt-2 space-y-1">
                                {routine.products.map((product, idx) => (
                                  <li key={idx} className="text-gray-600 text-sm flex items-center">
                                    <span className="mr-2">•</span>
                                    {product}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </motion.div>
                      )
                    ))}
                  </div>

                  {/* Additional Tips */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 bg-gray-50 rounded-xl p-6"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Additional Tips
                    </h4>
                    <ul className="grid gap-3 md:grid-cols-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Always use lukewarm water for washing
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Pat dry with a microfiber towel
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Avoid heat styling on consecutive days
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Deep condition once a week
                      </li>
                    </ul>
                   
                  </motion.div>
                  <div className="flex flex-col justify-center items-center">
                  <h1 className="text-gray-600 font-bold text-lg  mt-4">For more information, contact us </h1>
                  </div>


                  {/* Product Recommendations */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 bg-gray-50 rounded-xl p-6"
                  >
                    <h1 className="text-green-600 font-bold text-lg  mt-4">Get the 100% genuine Products </h1>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Recommended Products
                      
                    </h4>
                    
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium text-gray-900">Daily Care</h5>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                          <li>• Sulfate-free Shampoo</li>
                          <li>• Hydrating Conditioner</li>
                          <li>• Leave-in Treatment</li>
                        </ul>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h5 className="font-medium text-gray-900">Treatment Products</h5>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                          <li>• Deep Conditioning Mask</li>
                          <li>• Hair Oil</li>
                          <li>• Heat Protectant</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Action Buttons */}
                  <div className="mt-8 space-y-3">
                  <a href="tel:+919518329121" className="bg-blue-700 h-10 w-full rounded-md mt-2 hover:bg-blue-800 transition-all duration-300 flex items-center justify-center"><Phone className="w-4 h-4 mr-2"/> call us</a>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={resetQuiz}
                    >
                      Retake Quiz
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </>
  );
}