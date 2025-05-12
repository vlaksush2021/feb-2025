# 🖥️ Setup Guide: Check Processor Type and Install MySQL

## 🔍 Step 1: Check Your Processor Type

### ✅ For Windows:
1. Press `Windows + I` to open **Settings**.
2. Navigate to **System → About**.
3. Look under **Device specifications** for **System type**:
   - If you see: `64-bit operating system, x64-based processor` → Your processor is **x64**.
   - If you see: `ARM-based processor` → Your processor is **ARM**.

👉 Based on the result:
- **x64 processor**: Download `vc_redist.x64.exe`
- **ARM processor**: Download `vc_redist.arm64.exe`

## ✅ Check Installed C++ Redistributables Using Command Prompt

You can use the Command Prompt to list all installed Microsoft Visual C++ Redistributables:

1. Open **Command Prompt** as Administrator:
   - Press `Windows + S`, type `cmd`
   - Right-click on **Command Prompt** → choose **Run as administrator**

2. Run the following command:

   ```cmd
   wmic product where "Name like 'Microsoft Visual C++%'" get Name, Version
   ```
This will display a list of all installed Microsoft Visual C++ Redistributable packages along with their versions, like:  
```bash
Microsoft Visual C++ 2015-2022 Redistributable (x64)   14.36.32532
Microsoft Visual C++ 2015-2022 Redistributable (x86)   14.36.32532
```

Make sure at least version 14.x.xxxxx (2015 or later) is installed for MySQL 8 compatibility.

If its not download it from below link  
   

> Download from:
> [https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist)  
> windows 64 processor link - https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170

---

### ✅ For macOS:
1. Click the **Apple menu** → **About This Mac**.
2. Check the **Chip** or **Processor**:
   - **Apple M1, M2, M3** → ARM (Apple Silicon)
   - **Intel** → Intel-based (x64)

---

## 🔽 Step 2: Download and Install MySQL

### ✅ For Windows:
1. Visit the official MySQL download page:  
   [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/)
2. Click **"Windows (x86, 32-bit), MSI Installer"**.
3. Download the **mysql-installer-community** package.
4. Run the installer and follow the prompts:
   - Choose **Developer Default** setup (includes Server, Workbench, and connectors).
   - Set root password.
   - Complete installation.

---

### ✅ For macOS:
1. Go to the macOS MySQL download page:  
   [https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/)
2. Scroll to **macOS (x86, 64-bit)** or **macOS (ARM, 64-bit)** based on your chip type.
3. Download the **DMG Archive**.
4. Install and follow the instructions:
   - Set a root password.
   - Optionally install **MySQL Workbench** for database GUI.

---
