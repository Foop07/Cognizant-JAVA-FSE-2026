# Exercise 1: Git Configuration and Repository Setup

## Objectives
- Familiar with Git commands like `git init`, `git status`, `git add`, `git commit`, `git push`, and `git pull`.

## In this hands-on lab, you will learn how to:
- Setup your machine with Git Configuration
- Integrate notepad++.exe to Git and make it a default editor
- Add a file to source code repository

## Prerequisites
- Install Git Bash client in your machine

## Notes
- Please follow the below steps for creating a free account in GitHub.
- Don't use cognizant credentials to login to GitHub.

**Estimated time to complete this lab: 30 minutes.**

---

## Step 1: Setup your machine with Git Configuration

To create a new repository, signup with GitLab and register your credentials. Login to GitLab and create a "GitDemo" project.

### 1. Check Git Installation
```bash
git --version
```
> If output shows Git with its version information, that indicates Git Client is installed properly.

### 2. Configure User-Level Settings
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 3. Verify Configuration
```bash
git config --list
```

---

## Step 2: Integrate notepad++.exe to Git and make it a default editor

### 1. Check if notepad++ executes from Git bash
```bash
notepad++
```
> If Git bash could not recognize the notepad++ command, that implies notepad++.exe is not added to the environment path variable.

**To add path:** Go to Control Panel → System → Advanced System Settings → Advanced tab → Environment Variables → Add path of notepad++.exe to the PATH user variable by clicking "Edit".

### 2. Reopen Git Bash and verify
```bash
notepad++
```
> Now, notepad++ will open from Git bash shell.

### 3. Create an alias command for notepad++
```bash
alias npp='notepad++.exe'
```
Open notepad++ and create a user profile by adding the alias line to `~/.bashrc`.

### 4. Configure the editor
```bash
git config --global core.editor "notepad++.exe -multiInst -notabbar -nosession -noPlugin"
```

### 5. Verify the default editor
```bash
git config --global -e
```
> Here `-e` option implies editor. It will show the entire global configuration.

---

## Step 3: Add a file to source code repository

### 1. Create a new project
```bash
mkdir GitDemo
cd GitDemo
git init
```

### 2. Verify initialization
```bash
ls -la
```
> It will display all the hidden files in the Git "working directory".

### 3. Create a file and add content
```bash
echo "Welcome to Git" > welcome.txt
```

### 4. Verify file creation
```bash
ls
```

### 5. Verify the content
```bash
cat welcome.txt
```

### 6. Check status
```bash
git status
```
> Now the file "welcome.txt" is available in Git "working directory".

### 7. Track the file
```bash
git add welcome.txt
```

### 8. Commit with multi-line comment
```bash
git commit
```
> Notepad++ editor will open to add multi-line comment with default editor.

### 9. Verify local and working directory
```bash
git status
```
> welcome.txt is added to the local repository.

### 10. Create remote repository
Signup with GitLab and create a remote repository "GitDemo".

### 11. Pull from remote
```bash
git pull origin master
```

### 12. Push to remote
```bash
git push origin master
```
