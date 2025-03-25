
export interface Review {
  id: string;
  rating: number;
  title: string;
  position: string;
  pros: string;
  cons: string;
  date: string;
  helpful: number;
  location: string;
}

export interface SentimentData {
  workLifeBalance: number;
  compensation: number;
  careerGrowth: number;
  culture: number;
  management: number;
  ceoRating: number;
  ceoName: string;
}

export interface CompanyReviewData {
  reviews: Review[];
  sentiment: SentimentData;
}

export const reviewsData: Record<string, CompanyReviewData> = {
  apple: {
    reviews: [
      {
        id: "1",
        rating: 5,
        title: "Amazing Work Culture and Innovation",
        position: "Senior Software Engineer",
        pros: "Cutting-edge technology, excellent benefits, smart colleagues, great work-life balance",
        cons: "High pressure environment, sometimes long working hours during product launches",
        date: "2024-04-15",
        helpful: 242,
        location: "Cupertino, CA"
      },
      {
        id: "2",
        rating: 4,
        title: "Great Company with Room for Growth",
        position: "Product Designer",
        pros: "Working with talented people, competitive salary, good benefits, interesting projects",
        cons: "Work can sometimes be siloed, decision-making can be slow due to company size",
        date: "2024-03-12",
        helpful: 187,
        location: "Austin, TX"
      },
      {
        id: "3",
        rating: 5,
        title: "Best Career Decision I've Made",
        position: "Machine Learning Engineer",
        pros: "Innovative projects, great compensation, excellent learning opportunities",
        cons: "Highly competitive internal culture, work-life balance challenges",
        date: "2024-02-28",
        helpful: 163,
        location: "Seattle, WA"
      }
    ],
    sentiment: {
      workLifeBalance: 3.8,
      compensation: 4.6,
      careerGrowth: 4.3,
      culture: 4.2,
      management: 4.0,
      ceoRating: 4.7,
      ceoName: "Tim Cook"
    }
  },
  microsoft: {
    reviews: [
      {
        id: "1",
        rating: 5,
        title: "Excellent Culture and Benefits",
        position: "Principal Software Engineer",
        pros: "Great work-life balance, competitive compensation, collaborative environment",
        cons: "Large company bureaucracy can slow things down",
        date: "2024-03-10",
        helpful: 128,
        location: "Redmond, WA"
      },
      {
        id: "2",
        rating: 4,
        title: "Strong Learning Culture",
        position: "Software Engineer",
        pros: "Great learning opportunities, good compensation, supportive team",
        cons: "Less room for individual contribution compared to smaller companies",
        date: "2024-02-22",
        helpful: 105,
        location: "Seattle, WA"
      },
      {
        id: "3",
        rating: 5,
        title: "Transformed Under Satya",
        position: "Product Manager",
        pros: "Innovation-focused culture, excellent leadership, good work-life balance",
        cons: "Still some legacy processes and tools that can be frustrating",
        date: "2024-03-18",
        helpful: 94,
        location: "Bellevue, WA"
      }
    ],
    sentiment: {
      workLifeBalance: 4.5,
      compensation: 4.3,
      careerGrowth: 4.4,
      culture: 4.2,
      management: 4.0,
      ceoRating: 4.8,
      ceoName: "Satya Nadella"
    }
  },
  google: {
    reviews: [
      {
        id: "1",
        rating: 4,
        title: "Great Environment for Innovation",
        position: "Software Engineer",
        pros: "Excellent benefits, smart colleagues, innovative projects",
        cons: "Some teams work with legacy systems",
        date: "2024-02-28",
        helpful: 89,
        location: "Remote"
      },
      {
        id: "2",
        rating: 5,
        title: "Best Place I've Worked",
        position: "Research Scientist",
        pros: "Cutting-edge research, amazing colleagues, great compensation",
        cons: "Work-life balance can be challenging in some teams",
        date: "2024-03-15",
        helpful: 112,
        location: "Mountain View, CA"
      },
      {
        id: "3",
        rating: 4,
        title: "Great Benefits but Growing Bureaucracy",
        position: "Product Manager",
        pros: "Amazing perks, smart colleagues, interesting problems to solve",
        cons: "Growing bureaucracy, harder to make an impact as the company grows",
        date: "2024-04-02",
        helpful: 78,
        location: "New York, NY"
      }
    ],
    sentiment: {
      workLifeBalance: 4.1,
      compensation: 4.6,
      careerGrowth: 4.2,
      culture: 4.4,
      management: 3.9,
      ceoRating: 4.5,
      ceoName: "Sundar Pichai"
    }
  },
  meta: {
    reviews: [
      {
        id: "1",
        rating: 4,
        title: "Ambitious Projects, Good Pay",
        position: "AR/VR Engineer",
        pros: "Working on cutting-edge technology, good compensation, smart colleagues",
        cons: "Work-life balance can be challenging, high pressure environment",
        date: "2024-03-05",
        helpful: 112,
        location: "Menlo Park, CA"
      },
      {
        id: "2",
        rating: 3,
        title: "Fast-Paced but Uncertain Direction",
        position: "Product Designer",
        pros: "High impact work, great pay, excellent benefits",
        cons: "Frequent reorganizations, strategy shifts, high stress environment",
        date: "2024-02-12",
        helpful: 98,
        location: "Seattle, WA"
      },
      {
        id: "3",
        rating: 4,
        title: "Challenging and Rewarding",
        position: "Software Engineer",
        pros: "Great compensation, brilliant colleagues, cutting-edge work",
        cons: "High expectations, sometimes unclear direction",
        date: "2024-03-28",
        helpful: 87,
        location: "New York, NY"
      }
    ],
    sentiment: {
      workLifeBalance: 3.8,
      compensation: 4.7,
      careerGrowth: 4.5,
      culture: 4.0,
      management: 3.7,
      ceoRating: 4.2,
      ceoName: "Mark Zuckerberg"
    }
  },
  amazon: {
    reviews: [
      {
        id: "1",
        rating: 3,
        title: "High Learning Curve with Challenges",
        position: "Software Development Engineer",
        pros: "Great learning opportunities, competitive pay, strong ownership culture",
        cons: "Work-life balance issues, high pressure, sometimes difficult management",
        date: "2024-03-18",
        helpful: 143,
        location: "Seattle, WA"
      },
      {
        id: "2",
        rating: 4,
        title: "Great Place to Build Your Career",
        position: "Senior Product Manager",
        pros: "Ownership culture, high impact work, excellent learning environment",
        cons: "Can be very competitive, sometimes poor work-life balance",
        date: "2024-02-24",
        helpful: 112,
        location: "Arlington, VA"
      },
      {
        id: "3",
        rating: 3,
        title: "Demanding but Rewarding",
        position: "Operations Manager",
        pros: "Fast career growth, learning opportunities, good compensation",
        cons: "Long hours, stressful environment, metrics-driven culture",
        date: "2024-04-05",
        helpful: 97,
        location: "Nashville, TN"
      }
    ],
    sentiment: {
      workLifeBalance: 2.8,
      compensation: 4.2,
      careerGrowth: 4.5,
      culture: 3.5,
      management: 3.2,
      ceoRating: 3.8,
      ceoName: "Andy Jassy"
    }
  },
  nvidia: {
    reviews: [
      {
        id: "1",
        rating: 5,
        title: "Exciting Time to Be Here",
        position: "Deep Learning Engineer",
        pros: "Working on revolutionary AI technology, excellent compensation, brilliant colleagues",
        cons: "High expectations, fast-paced environment can be stressful",
        date: "2024-03-28",
        helpful: 174,
        location: "Santa Clara, CA"
      },
      {
        id: "2",
        rating: 5,
        title: "Best Tech Company Right Now",
        position: "Hardware Engineer",
        pros: "Cutting-edge technology, strong leadership, great compensation and stock growth",
        cons: "Work can be intense during product launches, high performance expectations",
        date: "2024-02-18",
        helpful: 153,
        location: "Austin, TX"
      },
      {
        id: "3",
        rating: 4,
        title: "Challenging and Innovative",
        position: "Software Development Engineer",
        pros: "Working on revolutionary technology, brilliant colleagues, good benefits",
        cons: "Long hours sometimes, competitive environment",
        date: "2024-04-12",
        helpful: 82,
        location: "Seattle, WA"
      }
    ],
    sentiment: {
      workLifeBalance: 3.7,
      compensation: 4.8,
      careerGrowth: 4.6,
      culture: 4.3,
      management: 4.2,
      ceoRating: 4.9,
      ceoName: "Jensen Huang"
    }
  },
  netflix: {
    reviews: [
      {
        id: "1",
        rating: 4,
        title: "High Performance Culture",
        position: "Senior Software Engineer",
        pros: "Amazing compensation, high autonomy, brilliant colleagues",
        cons: "High performance expectations, limited job security",
        date: "2024-03-10",
        helpful: 118,
        location: "Los Gatos, CA"
      },
      {
        id: "2",
        rating: 4,
        title: "Radical Candor and Freedom",
        position: "Content Strategy Manager",
        pros: "Excellent compensation, high impact work, no bureaucracy",
        cons: "Intense feedback culture, high expectations, job insecurity",
        date: "2024-02-05",
        helpful: 95,
        location: "Los Angeles, CA"
      },
      {
        id: "3",
        rating: 3,
        title: "Freedom and Responsibility",
        position: "Product Manager",
        pros: "Great pay, interesting problems, minimal process",
        cons: "Stressful environment, high standards, hire slow fire fast culture",
        date: "2024-03-22",
        helpful: 87,
        location: "Remote"
      }
    ],
    sentiment: {
      workLifeBalance: 3.3,
      compensation: 4.9,
      careerGrowth: 4.2,
      culture: 4.1,
      management: 3.9,
      ceoRating: 4.3,
      ceoName: "Ted Sarandos & Greg Peters"
    }
  },
  salesforce: {
    reviews: [
      {
        id: "1",
        rating: 4,
        title: "Excellent Culture and Values",
        position: "Solution Architect",
        pros: "Great work-life balance, strong values, good benefits",
        cons: "Large company bureaucracy, sometimes siloed teams",
        date: "2024-03-15",
        helpful: 86,
        location: "San Francisco, CA"
      },
      {
        id: "2",
        rating: 4,
        title: "Great Place to Work",
        position: "Account Executive",
        pros: "Strong culture, good compensation, work-life balance",
        cons: "Quotas can be challenging, becoming more corporate as it grows",
        date: "2024-02-22",
        helpful: 73,
        location: "Chicago, IL"
      },
      {
        id: "3",
        rating: 5,
        title: "Values-Driven Company",
        position: "Senior Developer",
        pros: "Great culture, work-life balance, strong values",
        cons: "Slow decision making, complex organizational structure",
        date: "2024-04-05",
        helpful: 65,
        location: "Indianapolis, IN"
      }
    ],
    sentiment: {
      workLifeBalance: 4.5,
      compensation: 4.1,
      careerGrowth: 4.0,
      culture: 4.7,
      management: 4.2,
      ceoRating: 4.7,
      ceoName: "Marc Benioff"
    }
  },
  tesla: {
    reviews: [
      {
        id: "1",
        rating: 3,
        title: "Exciting Mission, Challenging Environment",
        position: "Manufacturing Engineer",
        pros: "Revolutionary products, fast-paced innovation, high impact work",
        cons: "Long hours, high pressure, work-life balance challenges",
        date: "2024-03-08",
        helpful: 142,
        location: "Fremont, CA"
      },
      {
        id: "2",
        rating: 4,
        title: "High Intensity, High Impact",
        position: "Software Engineer",
        pros: "Cutting-edge technology, mission-driven, good stock options",
        cons: "Long hours, high stress, unpredictable environment",
        date: "2024-02-14",
        helpful: 124,
        location: "Austin, TX"
      },
      {
        id: "3",
        rating: 3,
        title: "Challenging but Rewarding",
        position: "Product Manager",
        pros: "Innovative company, meaningful work, fast career growth potential",
        cons: "Unpredictable leadership decisions, long hours, high pressure",
        date: "2024-03-28",
        helpful: 108,
        location: "Palo Alto, CA"
      }
    ],
    sentiment: {
      workLifeBalance: 2.5,
      compensation: 4.0,
      careerGrowth: 4.2,
      culture: 3.6,
      management: 3.1,
      ceoRating: 3.9,
      ceoName: "Elon Musk"
    }
  },
  ibm: {
    reviews: [
      {
        id: "1",
        rating: 4,
        title: "Stable with Good Benefits",
        position: "Cloud Solutions Architect",
        pros: "Work-life balance, good benefits, stable environment",
        cons: "Slow decision making, bureaucratic processes",
        date: "2024-03-12",
        helpful: 65,
        location: "Armonk, NY"
      },
      {
        id: "2",
        rating: 3,
        title: "Great People, Challenging Bureaucracy",
        position: "Advisory Consultant",
        pros: "Smart colleagues, good work-life balance, remote flexibility",
        cons: "Bureaucratic processes, slow growth, complex organization",
        date: "2024-02-18",
        helpful: 58,
        location: "Austin, TX"
      },
      {
        id: "3",
        rating: 4,
        title: "Improving Culture Under New Leadership",
        position: "Software Engineer",
        pros: "Good benefits, work-life balance, interesting projects",
        cons: "Still some legacy processes, slow in adopting new technologies",
        date: "2024-04-02",
        helpful: 45,
        location: "Raleigh, NC"
      }
    ],
    sentiment: {
      workLifeBalance: 4.3,
      compensation: 3.7,
      careerGrowth: 3.5,
      culture: 3.8,
      management: 3.6,
      ceoRating: 4.1,
      ceoName: "Arvind Krishna"
    }
  },
  oracle: {
    reviews: [
      {
        id: "1",
        rating: 3,
        title: "Good Compensation, Traditional Culture",
        position: "Senior Sales Consultant",
        pros: "Good compensation, established products, market leadership",
        cons: "Traditional corporate culture, work-life balance can be challenging",
        date: "2024-03-05",
        helpful: 73,
        location: "Austin, TX"
      },
      {
        id: "2",
        rating: 4,
        title: "Improved with Cloud Transition",
        position: "Cloud Architect",
        pros: "Good pay, interesting technical challenges, improving culture",
        cons: "Some legacy processes, sometimes siloed organization",
        date: "2024-02-14",
        helpful: 62,
        location: "Seattle, WA"
      },
      {
        id: "3",
        rating: 3,
        title: "Stable but Challenging",
        position: "Product Manager",
        pros: "Good compensation, stable company, strong market position",
        cons: "Political environment, complex decision making, top-down culture",
        date: "2024-03-28",
        helpful: 54,
        location: "Denver, CO"
      }
    ],
    sentiment: {
      workLifeBalance: 3.4,
      compensation: 4.2,
      careerGrowth: 3.6,
      culture: 3.3,
      management: 3.2,
      ceoRating: 3.8,
      ceoName: "Safra Catz"
    }
  },
  amd: {
    reviews: [
      {
        id: "1",
        rating: 5,
        title: "Great Momentum and Culture",
        position: "Design Engineer",
        pros: "Exciting technology, strong leadership, good work environment",
        cons: "Resources can be limited compared to larger competitors",
        date: "2024-03-18",
        helpful: 84,
        location: "Santa Clara, CA"
      },
      {
        id: "2",
        rating: 4,
        title: "Exciting Time to Be Here",
        position: "Software Developer",
        pros: "Innovative projects, good management, competitive pay",
        cons: "Still smaller than main competitors, can feel resource constrained",
        date: "2024-02-25",
        helpful: 76,
        location: "Austin, TX"
      },
      {
        id: "3",
        rating: 5,
        title: "Excellent Leadership",
        position: "Product Manager",
        pros: "Great CEO leadership, winning culture, good compensation",
        cons: "Fast growth creating some growing pains, work can be intense",
        date: "2024-04-06",
        helpful: 68,
        location: "Markham, Canada"
      }
    ],
    sentiment: {
      workLifeBalance: 3.9,
      compensation: 4.3,
      careerGrowth: 4.4,
      culture: 4.5,
      management: 4.3,
      ceoRating: 4.8,
      ceoName: "Lisa Su"
    }
  },
  intel: {
    reviews: [
      {
        id: "1",
        rating: 3,
        title: "Stable but Struggling",
        position: "Process Engineer",
        pros: "Good benefits, work-life balance, stable employment",
        cons: "Slow decision making, falling behind competitors, bureaucratic",
        date: "2024-03-14",
        helpful: 95,
        location: "Hillsboro, OR"
      },
      {
        id: "2",
        rating: 3,
        title: "In Transition",
        position: "Hardware Engineer",
        pros: "Good benefits, smart colleagues, strong R&D capabilities",
        cons: "Slow execution, bureaucratic culture, falling behind competition",
        date: "2024-02-22",
        helpful: 87,
        location: "Santa Clara, CA"
      },
      {
        id: "3",
        rating: 4,
        title: "Improving Under New Leadership",
        position: "Software Engineer",
        pros: "New leadership bringing positive changes, good benefits",
        cons: "Legacy culture still present, slow transformation",
        date: "2024-04-02",
        helpful: 65,
        location: "Chandler, AZ"
      }
    ],
    sentiment: {
      workLifeBalance: 4.1,
      compensation: 3.9,
      careerGrowth: 3.5,
      culture: 3.4,
      management: 3.6,
      ceoRating: 3.9,
      ceoName: "Patrick Gelsinger"
    }
  }
  // Add more companies as needed
};
