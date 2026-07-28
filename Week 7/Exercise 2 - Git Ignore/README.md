# Exercise 2: Git Ignore

## Objectives
- Explain git ignore
- Explain how to ignore unwanted files using git ignore

## In this hands-on lab, you will learn how to:
- Implement git ignore command to ignore unwanted files and folders

## Prerequisites
- Setting up Git environment
- Integrate notepad++ as a default editor
- A Git repository in the local system and a remote repository in GitLab

## Notes
- Please follow the below steps for creating a free account in GitHub.
- Do not use cognizant credentials to login to GitHub.

**Estimated time to complete this lab: 20 minutes.**

---

## Task

Create a `.log` file and a `log` folder in the working directory of Git. Update the `.gitignore` file in such a way that on committing, these files (`.log` extensions and `log` folders) are ignored.

Verify if the `git status` reflects the same about working directory, local repository and git repository.

---

## Solution Steps

### 1. Navigate to your Git repository
```bash
cd GitDemo
```

### 2. Create a .log file and a log folder
```bash
touch application.log
mkdir log
echo "Some log content" > log/debug.log
```

### 3. Check initial status
```bash
git status
```
> You should see both `application.log` and `log/` as untracked files.

### 4. Create and configure .gitignore
```bash
notepad++ .gitignore
```

Add the following lines to `.gitignore`:
```
# Ignore all .log files
*.log

# Ignore log directories
log/
```

### 5. Save and verify
```bash
cat .gitignore
```

### 6. Check git status after .gitignore
```bash
git status
```
> Now, `.log` files and `log/` folder should NOT appear in the untracked files list. Only `.gitignore` should be shown as a new untracked file.

### 7. Add and commit .gitignore
```bash
git add .gitignore
git commit -m "Add .gitignore to ignore .log files and log directories"
```

### 8. Verify final status
```bash
git status
```
> Working directory should be clean, confirming the `.log` files and `log/` folder are properly ignored.
