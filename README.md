![BasicFullstackApplication](https://github.com/abman95/BasicFullstackApplication/assets/132164884/3ca09443-9f42-419c-b1eb-1464d90f3047)

# Installation Guide for Basic Fullstack Application

Operating System Used for Instructions: Linux Kubuntu

### Install Visual Studio Code:

1. Install Visual Studio Code.

### Install Node Package Manager (NPM) & MySQL:

1. Open the Terminal (Ctrl + Alt + T).
2. Execute the following commands:
   - `sudo apt install npm`
   - `sudo apt-get update`
   - `sudo apt-get install mysql-server`

### Clone Repository to Your Local Machine:

1. Navigate to the desired directory for cloning the project.
2. Right-click and choose 'Open Terminal here'.
3. Execute the following commands:
   - `git clone https://github.com/abman95/BasicFullstackApplication.git`
   - `cd BasicFullstackApplication`
   - `code .` (This command opens the project in Visual Studio Code).

### Inside Visual Studio Code:

1. Open the Terminal in VSCode and execute the following commands:
   - `npm install`
   - `npm install mysql`
2. Change the directory to 'Server' with:
   - `cd Server`
3. Create the SQL database and then run the index.js file with:
   - `node db.js`
   - `node index.js`

### Open Project in Browser:

1. Simply open the folder "BasicFullstackApplication".
2. Navigate to the "Client" folder.
3. Open the file "index.html".

### Features of the Project:

- **View Question-Answer Pairs:** The homepage displays all existing question-answer pairs retrieved from the database.
- **Add New Question-Answer Pair:** Use the input fields at the top to enter a new question and its corresponding answer. Click the "Submit" button to add the pair to the database.
- **Edit a Question-Answer Pair:** Each question-answer pair on the list has an "Edit" button. Clicking "Edit" makes the question and answer fields editable, allowing you to update either the question or the answer. After editing, click "Save" next to the pair to commit the changes to the database.
- **Delete a Question-Answer Pair:** A "Delete" button is provided next to each question-answer pair. Click "Delete" to remove the pair from the database.
- **Verify Changes in the Database:** To directly access the database management interface, visit localhost/adminer.php.
- **Log in to MySQL:** Use the following credentials: Database System: "MySQL", Server: "localhost", User: "root", Password: "root", Database: "YourDatabaseName".
- **Open Database:** In Adminer, click on the database used by your application and navigate to the table storing the question-answer pairs, e.g., question_answer.
- **Confirm Data:** In the question_answer table, you can view all entries, including those you've added, edited, or deleted, to verify the database has been updated correctly.

This overview provides a clear and structured guide to the main features of your application, including creating, editing, deleting, and verifying question-answer pairs in a database, all through a user-friendly interface.
