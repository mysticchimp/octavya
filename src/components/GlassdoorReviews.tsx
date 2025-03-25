
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, ThumbsUp, User, BarChart2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { reviewsData } from "@/data/reviewsData";

interface GlassdoorReviewsProps {
  companyId: string;
}

export const GlassdoorReviews = ({ companyId }: GlassdoorReviewsProps) => {
  const companyData = reviewsData[companyId];
  const companyReviews = companyData?.reviews || [];

  if (!companyData) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Employee Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No review data available for this company.</p>
        </CardContent>
      </Card>
    );
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Employee Reviews</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-2 p-2 bg-yellow-100 rounded-full">
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
                <div>
                  <div className="text-lg font-semibold">Overall Rating</div>
                  <div className="text-sm text-muted-foreground">Based on employee reviews</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  {(
                    companyData.sentiment.workLifeBalance +
                    companyData.sentiment.compensation +
                    companyData.sentiment.careerGrowth +
                    companyData.sentiment.culture +
                    companyData.sentiment.management
                  ).toFixed(1) / 5}/5
                </div>
                <div className="flex justify-center">{renderStars(4.2)}</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Work-Life Balance</span>
                <span className="font-medium">{companyData.sentiment.workLifeBalance}/5</span>
              </div>
              <Progress value={companyData.sentiment.workLifeBalance * 20} className="h-2" />
              
              <div className="flex justify-between text-sm">
                <span>Compensation & Benefits</span>
                <span className="font-medium">{companyData.sentiment.compensation}/5</span>
              </div>
              <Progress value={companyData.sentiment.compensation * 20} className="h-2" />
              
              <div className="flex justify-between text-sm">
                <span>Career Growth</span>
                <span className="font-medium">{companyData.sentiment.careerGrowth}/5</span>
              </div>
              <Progress value={companyData.sentiment.careerGrowth * 20} className="h-2" />
              
              <div className="flex justify-between text-sm">
                <span>Culture & Values</span>
                <span className="font-medium">{companyData.sentiment.culture}/5</span>
              </div>
              <Progress value={companyData.sentiment.culture * 20} className="h-2" />
              
              <div className="flex justify-between text-sm">
                <span>Management</span>
                <span className="font-medium">{companyData.sentiment.management}/5</span>
              </div>
              <Progress value={companyData.sentiment.management * 20} className="h-2" />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-2 p-2 bg-blue-100 rounded-full">
                  <User className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <div className="text-lg font-semibold">CEO Approval</div>
                  <div className="text-sm text-muted-foreground">{companyData.sentiment.ceoName}</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{companyData.sentiment.ceoRating}/5</div>
                <div className="flex justify-center">{renderStars(companyData.sentiment.ceoRating)}</div>
              </div>
            </div>
            
            <div className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center space-x-2">
                <BarChart2 className="h-5 w-5 text-slate-500" />
                <span className="font-medium">Review Stats</span>
              </div>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Reviews</span>
                  <span>{companyReviews.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Average Rating</span>
                  <span>
                    {(companyReviews.reduce((acc, review) => acc + review.rating, 0) / companyReviews.length).toFixed(1)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Recommend to a Friend</span>
                  <span>78%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Positive Outlook</span>
                  <span>81%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t">
          <h3 className="font-semibold text-lg mb-4">Recent Reviews</h3>
          <div className="space-y-4">
            {companyReviews.map((review) => (
              <div
                key={review.id}
                className="p-4 border rounded-lg space-y-3"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">{review.title}</h3>
                    <div className="flex items-center mt-1">
                      {renderStars(review.rating)}
                      <span className="ml-2 text-sm text-muted-foreground">{review.rating}/5</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="w-4 h-4 mr-1" />
                    <span>{review.position}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-medium mb-1">Pros</div>
                    <p className="text-sm text-muted-foreground">{review.pros}</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Cons</div>
                    <p className="text-sm text-muted-foreground">{review.cons}</p>
                  </div>
                </div>

                <div className="flex justify-between text-sm text-muted-foreground pt-2 border-t">
                  <div>{review.date}</div>
                  <div className="flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    <span>{review.helpful} found helpful</span>
                  </div>
                  <div>{review.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
