const advisorMessage = document.getElementById('advisor-message');
const inputSection = document.getElementById('input-section');
const buttonSection = document.getElementById('button-section');

let userName = '';

const messages = {
    "get-name": {
        question: "Welcome! What's your name?",
        options: [{ text: "Submit", next: "ask-experience" }]
    },
    "ask-experience": {
        question: "How would you describe your programming experience?",
        options: [
            { text: "Beginner", next: "ask-interest" },
            { text: "Intermediate", next: "ask-interest" },
            { text: "Advanced", next: "ask-interest" }
        ]
    },
    "ask-interest": {
        question: "What area of programming interests you the most?",
        options: [
            { text: "Web Development", next: "recommendation-web" },
            { text: "Mobile Development", next: "recommendation-mobile" },
            { text: "Game Development", next: "recommendation-game" },
            { text: "DevOps", next: "recommendation-devops" },
            { text: "AI and Machine Learning", next: "recommendation-ai" }
        ]
    },
    "recommendation-web": {
        question: "If you're interested in Web Development, here are some recommendations:",
        options: [
            { text: "Next Tip", next: "recommendation-web-2" },
            { text: "Change Interest", next: "ask-interest" },
            { text: "Restart", next: "get-name" },
            { text: "Quit", next: "quit" }
        ]
    },
    "recommendation-web-2": {
        question: "1. Learn HTML, CSS, and JavaScript.",
        options: [
            { text: "Next Tip", next: "recommendation-web-3" }
        ]
    },
    "recommendation-web-3": {
        question: "2. Get familiar with frontend frameworks like React, Angular, or Vue.js.",
        options: [
            { text: "Next Tip", next: "recommendation-web-4" }
        ]
    },
    "recommendation-web-4": {
        question: "3. Learn about backend development with Node.js, Express, and databases like MongoDB or SQL.",
        options: [
            { text: "Next Tip", next: "recommendation-web-5" }
        ]
    },
    "recommendation-web-5": {
        question: "4. Understand the principles of responsive design and accessibility.",
        options: [
            { text: "Next Tip", next: "recommendation-web-6" }
        ]
    },
    "recommendation-web-6": {
        question: "5. Practice by building small projects and gradually increase the complexity.",
        options: [
            { text: "Next Tip", next: "recommendation-web-7" }
        ]
    },
    "recommendation-web-7": {
        question: "6. Stay updated with the latest trends in web development by following blogs, taking courses, and participating in developer communities.",
        options: [
            { text: "Change Interest", next: "ask-interest" },
            { text: "Restart", next: "get-name" },
            { text: "Quit", next: "quit" }
        ]
    },
    "recommendation-mobile": {
        question: "If you're interested in Mobile Development, here are some recommendations:",
        options: [
            { text: "Next Tip", next: "recommendation-mobile-2" },
            { text: "Change Interest", next: "ask-interest" },
            { text: "Restart", next: "get-name" },
            { text: "Quit", next: "quit" }
        ]
    },
    "recommendation-mobile-2": {
        question: "1. Choose between native development (Java/Kotlin for Android, Swift for iOS) or cross-platform development (Flutter, React Native).",
        options: [
            { text: "Next Tip", next: "recommendation-mobile-3" }
        ]
    },
    "recommendation-mobile-3": {
        question: "2. Learn the basics of UI/UX design for mobile applications.",
        options: [
            { text: "Next Tip", next: "recommendation-mobile-4" }
        ]
    },
    "recommendation-mobile-4": {
        question: "3. Get familiar with mobile app development tools and environments like Android Studio or Xcode.",
        options: [
            { text: "Next Tip", next: "recommendation-mobile-5" }
        ]
    },
    "recommendation-mobile-5": {
        question: "4. Understand the principles of responsive design and adaptive layouts.",
        options: [
            { text: "Next Tip", next: "recommendation-mobile-6" }
        ]
    },
    "recommendation-mobile-6": {
        question: "5. Learn about mobile app testing and debugging.",
        options: [
            { text: "Next Tip", next: "recommendation-mobile-7" }
        ]
    },
    "recommendation-mobile-7": {
        question: "6. Practice by building simple mobile apps and gradually increase the complexity.",
        options: [
            { text: "Next Tip", next: "recommendation-mobile-8" }
        ]
    },
    "recommendation-mobile-8": {
        question: "7. Explore app distribution platforms like Google Play Store and Apple App Store.",
        options: [
            { text: "Next Tip", next: "recommendation-mobile-9" }
        ]
    },
    "recommendation-mobile-9": {
        question: "8. Stay updated with the latest trends in mobile development by following blogs, taking courses, and participating in developer communities.",
        options: [
            { text: "Change Interest", next: "ask-interest" },
            { text: "Restart", next: "get-name" },
            { text: "Quit", next: "quit" }
        ]
    },
    "recommendation-game": {
        question: "If you're interested in Game Development, here are some recommendations:",
        options: [
            { text: "Next Tip", next: "recommendation-game-2" },
            { text: "Change Interest", next: "ask-interest" },
            { text: "Restart", next: "get-name" },
            { text: "Quit", next: "quit" }
        ]
    },
    "recommendation-game-2": {
        question: "1. Choose a game engine like Unity (C#) or Unreal Engine (C++).",
        options: [
            { text: "Next Tip", next: "recommendation-game-3" }
        ]
    },
    "recommendation-game-3": {
        question: "2. Learn the basics of game design and mechanics.",
        options: [
            { text: "Next Tip", next: "recommendation-game-4" }
        ]
    },
    "recommendation-game-4": {
        question: "3. Get familiar with 3D modeling tools like Blender or Maya.",
        options: [
            { text: "Next Tip", next: "recommendation-game-5" }
        ]
    },
    "recommendation-game-5": {
        question: "4. Understand the principles of animation and physics in games.",
        options: [
            { text: "Next Tip", next: "recommendation-game-6" }
        ]
    },
    "recommendation-game-6": {
        question: "5. Learn about sound design and audio integration.",
        options: [
            { text: "Next Tip", next: "recommendation-game-7" }
        ]
    },
    "recommendation-game-7": {
        question: "6. Practice by creating small games and gradually increase the complexity.",
        options: [
            { text: "Next Tip", next: "recommendation-game-8" }
        ]
    },
    "recommendation-game-8": {
        question: "7. Stay updated with the latest trends in game development by following blogs, taking courses, and participating in developer communities.",
        options: [
            { text: "Change Interest", next: "ask-interest" },
            { text: "Restart", next: "get-name" },
            { text: "Quit", next: "quit" }
        ]
    },
    "recommendation-devops": {
        question: "If you're interested in DevOps, here are some recommendations:",
        options: [
            { text: "Next Tip", next: "recommendation-devops-2" },
            { text: "Change Interest", next: "ask-interest" },
            { text: "Restart", next: "get-name" },
            { text: "Quit", next: "quit" }
        ]
    },
    "recommendation-devops-2": {
        question: "1. Learn the basics of Linux and shell scripting.",
        options: [
            { text: "Next Tip", next: "recommendation-devops-3" }
        ]
    },
    "recommendation-devops-3": {
        question: "2. Get familiar with CI/CD tools like Jenkins, Travis CI, or GitHub Actions.",
        options: [
            { text: "Next Tip", next: "recommendation-devops-4" }
        ]
    },
    "recommendation-devops-4": {
        question: "3. Learn about containerization with Docker and orchestration with Kubernetes.",
        options: [
            { text: "Next Tip", next: "recommendation-devops-5" }
        ]
    },
    "recommendation-devops-5": {
        question: "4. Understand infrastructure as code with tools like Terraform or Ansible.",
        options: [
            { text: "Next Tip", next: "recommendation-devops-6" }
        ]
    },
    "recommendation-devops-6": {
        question: "5. Learn about cloud services from providers like AWS, Azure, or Google Cloud.",
        options: [
            { text: "Next Tip", next: "recommendation-devops-7" }
        ]
    },
    "recommendation-devops-7": {
        question: "6. Stay updated with the latest trends in DevOps by following blogs, taking courses, and participating in developer communities.",
        options: [
            { text: "Change Interest", next: "ask-interest" },
            { text: "Restart", next: "get-name" },
            { text: "Quit", next: "quit" }
        ]
    },
    "recommendation-ai": {
        question: "If you're interested in AI and Machine Learning, here are some recommendations:",
        options: [
            { text: "Next Tip", next: "recommendation-ai-2" },
            { text: "Change Interest", next: "ask-interest" },
            { text: "Restart", next: "get-name" },
            { text: "Quit", next: "quit" }
        ]
    },
    "recommendation-ai-2": {
        question: "1. Learn the basics of Python programming.",
        options: [
            { text: "Next Tip", next: "recommendation-ai-3" }
        ]
    },
    "recommendation-ai-3": {
        question: "2. Get familiar with libraries like NumPy, Pandas, and Matplotlib.",
        options: [
            { text: "Next Tip", next: "recommendation-ai-4" }
        ]
    },
    "recommendation-ai-4": {
        question: "3. Learn about machine learning algorithms and models.",
        options: [
            { text: "Next Tip", next: "recommendation-ai-5" }
        ]
    },
    "recommendation-ai-5": {
        question: "4. Practice with machine learning frameworks like Scikit-learn, TensorFlow, or PyTorch.",
        options: [
            { text: "Next Tip", next: "recommendation-ai-6" }
        ]
    },
    "recommendation-ai-6": {
        question: "5. Understand the principles of data preprocessing and feature engineering.",
        options: [
            { text: "Next Tip", next: "recommendation-ai-7" }
        ]
    },
    "recommendation-ai-7": {
        question: "6. Learn about neural networks and deep learning.",
        options: [
            { text: "Next Tip", next: "recommendation-ai-8" }
        ]
    },
    "recommendation-ai-8": {
        question: "7. Practice by building projects and applying AI to real-world applications.",
        options: [
            { text: "Next Tip", next: "recommendation-ai-9" }
        ]
    },
    "recommendation-ai-9": {
        question: "8. Stay updated with the latest research and developments in AI by reading research papers and following AI communities.",
        options: [
            { text: "Change Interest", next: "ask-interest" },
            { text: "Restart", next: "get-name" },
            { text: "Quit", next: "quit" }
        ]
    },
    "quit": {
        question: "Thank you for using the Ultimate Programming Advisor! Feel free to come back anytime.",
        options: []
    }
};

let currentStep = "get-name";

function displayMessage() {
    const message = messages[currentStep];
    advisorMessage.innerText = message.question;

    // Clear previous inputs and buttons
    inputSection.innerHTML = '';
    buttonSection.innerHTML = '';

    // Handle input section
    if (currentStep === "get-name") {
        inputSection.innerHTML = '<input type="text" id="name-input" placeholder="Enter your name">';
    } else if (currentStep === "ask-experience" || currentStep === "ask-interest") {
        inputSection.innerHTML = '';
    }

    // Handle button section
    message.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.onclick = () => {
            if (currentStep === "get-name") {
                const nameInput = document.getElementById('name-input');
                if (nameInput && nameInput.value.trim()) {
                    userName = nameInput.value.trim();
                    messages["ask-experience"].question = `Nice to meet you, ${userName}! How would you describe your programming experience?`;
                    currentStep = option.next;
                    displayMessage();
                } else {
                    alert("Please enter your name.");
                }
            } else {
                currentStep = option.next;
                displayMessage();
            }
        };
        buttonSection.appendChild(button);
    });
}

// Initialize the first message
displayMessage();