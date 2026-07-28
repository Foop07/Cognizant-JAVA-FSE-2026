# Exercise 5: Merge Conflict Resolution (Advanced)

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

Create `hello.xml` with branch-specific content:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<greeting>
    <message>Hello from GitWork branch - Advanced!</message>
    <author>Developer A</author>
    <timestamp>2024-01-15</timestamp>
</greeting>
```
```bash
cat > hello.xml << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<greeting>
    <message>Hello from GitWork branch - Advanced!</message>
    <author>Developer A</author>
    <timestamp>2024-01-15</timestamp>
</greeting>
EOF
```

### 3. Update the content of "hello.xml" and observe the status
```bash
git status
```

### 4. Commit the changes to reflect in the branch
```bash
git add hello.xml
git commit -m "Added hello.xml with advanced content in GitWork branch"
```

### 5. Switch to master
```bash
git checkout master
```

### 6. Add "hello.xml" to the master with different content
```bash
cat > hello.xml << 'EOF'
<?xml version="1.0" encoding="UTF-8"?>
<greeting>
    <message>Hello from Master - Advanced Version!</message>
    <author>Developer B</author>
    <version>2.0</version>
</greeting>
EOF
```

### 7. Commit the changes to the master
```bash
git add hello.xml
git commit -m "Added hello.xml with different advanced content in master"
```

### 8. Observe the log
```bash
git log --oneline --graph --decorate --all
```

### 9. Check the differences with Git diff tool
```bash
git diff master GitWork
```

### 10. Use P4Merge tool for better visualization
```bash
git difftool master GitWork
```

### 11. Merge the branch to the master
```bash
git merge GitWork
```
> This will result in a CONFLICT since both branches modified `hello.xml` with different content.

### 12. Observe the git mark up
```bash
cat hello.xml
```
> You will see conflict markers showing content from both branches.

### 13. Use 3-way merge tool to resolve the conflict
```bash
git mergetool
```
> Use the merge tool to resolve the conflict by choosing the appropriate content or combining both versions.

### 14. Commit the changes to the master after conflict resolution
```bash
git add hello.xml
git commit -m "Resolved advanced merge conflict in hello.xml"
```

### 15. Observe the git status and add backup file to .gitignore
```bash
git status
echo "*.orig" >> .gitignore
```

### 16. Commit the changes to .gitignore
```bash
git add .gitignore
git commit -m "Updated .gitignore to exclude backup files from merge tools"
```

### 17. List out all the available branches
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
