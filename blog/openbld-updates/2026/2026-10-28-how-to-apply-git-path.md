---
slug: how-to-apply-git-path
title: ↗ Apply Git Path to Own Project
description: A guide on how to apply a Git path in your projects.
authors: [sysadminkz]
keywords: [openbld, 2026]
tags: [openbld, 2026]
---

![How to Apply Git Path](images/how-to-apply-git-patch.webp)

# How to Apply Git Path

Patch files has `.patch` extension and are used to distribute changes to source code. They can be applied to a Git repository using the `git apply` command.
{/* truncate */}
As example I has `v0.2.4-http-sources.patch` file and want to apply it to my local repository.

Go to the repository directory and check the status of the repository:
```bash
cd /path/to/benzine-gateway
git status --short
```

If the repository is clean, you can apply the patch, but first check what changes will be applied:
```bash
git apply --check /path/to/v0.2.4-http-sources.patch
```

If the check is successful, you can apply the patch:
```bash
git apply /path/to/v0.2.4-http-sources.patch
```

After applying the patch, you can check the status of the repository again to see the changes:
```bash
git diff
```

Add the changes to the staging area and commit them:
```bash
git add config.go main.go gateway_test.go
git commit -m "Allow HTTP and HTTPS list sources"
```

Done!
