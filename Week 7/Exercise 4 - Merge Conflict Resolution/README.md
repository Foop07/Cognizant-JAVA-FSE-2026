# Exercise 4: Merge Conflict Resolution

## Objectives
- Explain how to resolve the conflict during merge.

## In this hands-on lab, you will learn how to:
- Implement conflict resolution when multiple users are updating the trunk (or master) in such a way that it results into a conflict with the branch's modification.

## Prerequisites
- Hands-on ID: "Git-T03-HOL_001"

## Notes
- Please follow the below steps for creating a free account in GitHub.
- Do not use cognizant credentials to login to GitHub.

**Estimated time to complete this lab: 30 minutes.**

---

## Steps

### 1. Verify if master is in clean state
```bash
git status
```

### 2. Create a branch "GitWork" and add a file "hello.xml"
```bash
git branch GitWork
git checkout GitWork
```

Create `hello.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<greeting>
    <message>Hello from the branch!</message>
    <author>Developer A</author>
</greeting>
```
```bash
echo '<?xml version="1.0" encoding="UTF-8"?><greeting><message>Hello from the branch!</message><author>Developer A</author></greeting>' > hello.xml
```

### 3. Update the content and observe the status
```bash
git status
```
> You should see `hello.xml` as an untracked or modified file.

### 4. Commit the changes to reflect in the branch
```bash
git add hello.xml
git commit -m "Added hello.xml in GitWork branch"
```

### 5. Switch to master
```bash
git checkout master
```

### 6. Add "hello.xml" to master with different content
```bash
echo '<?xml version="1.0" encoding="UTF-8"?><greeting><message>Hello from master!</message><author>Developer B</author></greeting>' > hello.xml
```

### 7. Commit the changes to the master
```bash
git add hello.xml
git commit -m "Added hello.xml in master with different content"
```

### 8. Observe the log
```bash
git log --oneline --graph --decorate --all
```

### 9. Check differences with Git diff tool
```bash
git diff master GitWork
```

### 10. Use P4Merge for better visualization
```bash
git difftool master GitWork
```

### 11. Merge the branch to the master
```bash
git merge GitWork
```
> This will result in a CONFLICT since both branches modified `hello.xml`.

### 12. Observe the git mark up
Open `hello.xml` to see conflict markers:
```
<<<<<<< HEAD
(master content)
=======
(branch content)
>>>>>>> GitWork
```

### 13. Use 3-way merge tool to resolve the conflict
```bash
git mergetool
```
> Resolve the conflict by choosing the desired content from either branch or combining them.

### 14. Commit the changes after conflict resolution
```bash
git add hello.xml
git commit -m "Resolved merge conflict in hello.xml"
```

### 15. Observe git status and add backup file to .gitignore
```bash
git status
echo "*.orig" >> .gitignore
```

### 16. Commit the changes to .gitignore
```bash
git add .gitignore
git commit -m "Updated .gitignore to ignore .orig backup files"
```

### 17. List all available branches
```bash
git branch -a
```

### 18. Delete the branch which was merged to master
```bash
git branch -d GitWork
```

### 19. Observe the log
```bash
git log --oneline --graph --decorate
```
