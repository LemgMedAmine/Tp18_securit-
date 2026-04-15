# Tp18_securité

# 🔥 Firestorm Reverse Engineering & Frida Analysis

## 📌 Description

This project demonstrates the reverse engineering and dynamic analysis of the Firestorm Android application using Frida. The goal was to extract sensitive information (credentials) and retrieve a hidden flag from a Firebase database.

---

## 🧰 Tools Used

* Android Studio Emulator (x86_64)
* ADB (Android Debug Bridge)
* Frida & Frida-Server
* Python 3
* Pyrebase (Firebase interaction)

---

## ⚙️ Setup

### 1. Install Frida

```bash
pip install frida-tools
```

### 2. Start Emulator

```bash
emulator -avd Pixel_6
```

### 3. Start Frida Server

```bash
adb push frida-server /data/local/tmp/
adb shell chmod 755 /data/local/tmp/frida-server
adb shell /data/local/tmp/frida-server &
```
<img width="635" height="174" alt="image" src="https://github.com/user-attachments/assets/e3829cc5-1be8-475e-9823-31b452a7e5fd" />

---

## 📱 APK Installation

```bash
adb install Firestorm.apk
```

---

## 🧠 Dynamic Analysis (Frida)

List running apps:

```bash
frida-ps -Uai
```
<img width="1485" height="582" alt="Capture d&#39;écran 2026-04-15 184527" src="https://github.com/user-attachments/assets/eafa1d57-4b81-4edf-a549-72b9e2ff5875" />

Attach to app:

```bash
frida -U -n Firestorm -l frida_firestorm.js
```
<img width="906" height="266" alt="image" src="https://github.com/user-attachments/assets/1d570d68-b205-4935-8301-753af35029dc" />

---

## 🔑 Credentials Extraction

Using Frida hooks, we intercepted sensitive data such as login credentials directly from the application at runtime.

---

## ☁️ Firebase Exploitation

The application was using Firebase Realtime Database. Extracted credentials were used to authenticate and access the database.

---

## 🚩 Flag Retrieval

A Python script was used to retrieve the flag:

```bash
python get_flag.py
```
<img width="1878" height="596" alt="image" src="https://github.com/user-attachments/assets/a6b34e69-dba0-4b75-8f84-798dd5a674d5" />

---
<img width="1920" height="1080" alt="Capture d&#39;écran 2026-04-15 185658" src="https://github.com/user-attachments/assets/3b1680bd-2dab-4bbf-bf6f-c7cc5e6d81bf" />

---

## 🧠 What I Learned

* Dynamic analysis with Frida
* Hooking Android applications
* Extracting runtime secrets
* Firebase exploitation
* Android reverse engineering workflow


