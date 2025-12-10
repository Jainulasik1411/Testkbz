@echo off
cd c:\Amazonq_Aiautomation
git init
git add .
git commit -m "Add KBZ Playwright automation tests with parallel execution"
git remote add origin https://github.com/Jainulasik1411/Testkbz.git
git branch -M main
git push -u origin main
pause
