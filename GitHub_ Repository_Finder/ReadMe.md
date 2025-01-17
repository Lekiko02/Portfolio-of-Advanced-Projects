

# GitHub Language-Based Repository Explorer

This project is a web application that allows users to explore GitHub repositories based on programming languages. It uses the GitHub API to fetch and display repositories sorted by popularity (stars). Users can select a programming language, view repository details, and refresh for new recommendations.

## Features

- **Language Selection**: Choose from a variety of programming languages.
- **Repository Search**: Fetches repositories based on the selected language and sorts them by stars.
- **Repository Details**: Displays information about the repository, including:
  - Name
  - Description
  - Language
  - Stars
  - Fork count
  - Open issues
- **Refresh Option**: Allows users to fetch a new repository recommendation.

## Technologies Used

- **JavaScript (ES6 Modules)**: Core logic and functionality.
- **GitHub API**: To fetch repository data.
- **HTML/CSS**: Frontend structure and styling.
- **External Data Source**: Language options fetched from [GitHunt](https://github.com/kamranahmedse/githunt).

## Installation and Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repository
   ```
3. Open the `index.html` file in your browser to view the application.

## How It Works

1. **Language Selection**:
   - A dropdown menu fetches programming languages dynamically from an external source.
   - Once a language is selected, repositories for that language are fetched using the GitHub API.

2. **Fetching Repositories**:
   - The app uses the GitHub API to search for repositories based on the selected language, sorted by stars in descending order.

3. **Displaying Results**:
   - The app displays the repository name, description, language, star count, fork count, and open issues.

4. **Refresh Functionality**:
   - A "Refresh" button fetches and displays a new repository recommendation.

## Code Overview

- **`Backend_request.js`**:
  - Fetches repositories from GitHub based on the selected language.
  - Handles loading states and error states.

- **`refreshButton.js`**:
  - Implements the refresh functionality to reload a new repository recommendation.

## Example Usage

- Select a programming language from the dropdown.
- View a random popular repository in that language.
- Click "Refresh" to see another repository recommendation.

## Screenshots

*(Add relevant screenshots of your application here.)*

## API Usage

- This project uses the [GitHub REST API](https://docs.github.com/en/rest) to fetch repositories.
- Ensure you replace the `auth` token in the `Octokit` initialization with your personal access token for the GitHub API.

## Known Issues and Limitations

- The application fetches a maximum of 100 repositories due to GitHub API limits.
- Ensure the API token has sufficient permissions to access the repository data.

## Contribution

Feel free to fork this repository, open an issue, or submit a pull request if you'd like to contribute!

## License

This project is open-source and available under the [MIT License](LICENSE).
```

### Notes:
1. Replace placeholders like `your-username/your-repository` with actual links/details.
2. Add relevant screenshots to the "Screenshots" section if available.
3. Ensure you secure the API token by removing or obscuring it in public repositories.


![ezgif-5-2d78dc24f8](https://github.com/user-attachments/assets/f8a38f2e-ceb5-4183-b075-f59d65ca890e)
