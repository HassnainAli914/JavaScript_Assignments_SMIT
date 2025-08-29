
## 🔹 Create a New Repository (If Starting Fresh)

1. Create a new repository on GitHub (without README, `.gitignore`, or license).
2. Open a terminal in your project folder and run:

```bash
git init
git remote add origin https://github.com/HassnainAli914/JavaScript_Assignments_SMIT.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

---

## 🔹 Link Existing Local Files to GitHub Repository

If you already have local files but no Git repository configured:

```bash
git init
git remote add origin https://github.com/HassnainAli914/JavaScript_Assignments_SMIT.git
git fetch origin
git reset --hard origin/main
```

> ⚠ **Note:**
> The `reset --hard` command will overwrite local changes with the version from GitHub.
> Remove it if you want to keep local changes and merge manually.

---

## 🔹 Pull Latest Changes

Once connected, pull the latest updates:

```bash
git pull origin main --allow-unrelated-histories
```

---

## 🔹 Push Your Changes

After making updates locally:

```bash
git add .
git commit -m "Update: <describe changes>"
git push origin main
```

---

## 📝 Notes

* Ensure **Git** is installed on your machine.
* Use **SSH keys** or login credentials to authenticate (if prompted).
* Always **pull before pushing** to avoid conflicts.

---

### ✅ Author

**Hassnain Ali**
📌 [GitHub Profile](https://github.com/HassnainAli914)

```
https://github.com/HassnainAli914
