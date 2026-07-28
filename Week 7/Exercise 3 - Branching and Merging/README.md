# Exercise 3: Branching and Merging

## Objectives
- Explain branching and merging
- Explain about creating a branch request in GitLab
- Explain about creating a merge request in GitLab

## In this hands-on lab, you will learn how to:
- Construct a branch, do some changes in the branch, and merge it with master (or trunk)

## Prerequisites
- Setting up Git environment with P4Merge tool for Windows

## Notes
- Please follow the below steps for creating a free account in GitHub.
- Do not use cognizant credentials to login to GitHub.

**Estimated time to complete this lab: 30 minutes.**

---

## Branching

### 1. Create a new branch "GitNewBranch"
```bash
git branch GitNewBranch
```

### 2. List all local and remote branches
```bash
git branch -a
```
> Observe the `*` mark which denotes the current pointing branch.

### 3. Switch to the newly created branch and add files
```bash
git checkout GitNewBranch
echo "This is a new feature file" > feature.txt
echo "Another file in the branch" > notes.txt
git add .
```

### 4. Commit the changes to the branch
```bash
git commit -m "Added feature.txt and notes.txt in GitNewBranch"
```

### 5. Check the status
```bash
git status
```

---

## Merging

### 1. Switch to the master
```bash
git checkout master
```

### 2. List differences between trunk and branch (CLI)
```bash
git diff master GitNewBranch
```
> These provide the differences in command line interface.

### 3. List visual differences using P4Merge tool
```bash
git difftool master GitNewBranch
```
> This opens P4Merge to show visual differences between master and branch.

### 4. Merge the source branch to the trunk
```bash
git merge GitNewBranch
```

### 5. Observe the logging after merging
```bash
git log --oneline --graph --decorate
```

### 6. Delete the branch after merging
```bash
git branch -d GitNewBranch
git status
```
> Observe the git status after branch deletion.
