# Personal Decision Making App - Step 1: UI Setup, Basic Input Handling & Modular Output

## Description
This app helps track and analyze personal financial health. It allows users to input financial details such as income, savings, debts, and spending habits, then calculates a simplified **Finance Health Score**.  

Step 1 focuses on setting up the **basic user interface (UI)**, capturing inputs, and logging results in a **modular way** using separate JavaScript files for form handling, calculations, and results display.

---

## My Decision Focus
This app is designed to help users make better decisions about **personal financial management**. It evaluates aspects of finances—income, savings, debt, and spending—and gives a score reflecting financial health.  

The goal is to use this score as a decision-making tool for improving savings, reducing debts, and adjusting spending habits.

---

## Input Types Used
- **Number (monthly income)** → enter exact salary amount.  
- **Number (savings percentage)** → captures portion of income saved.  
- **Number (debt percentage)** → records income used for debt repayment.  
- **Radio buttons (spending habits)** → choose *Frugal*, *Balanced*, or *Impulsive*.

These inputs cover the **core factors** that influence financial health and decision-making.

---

## Color Palette
- **Primary Indigo**: `#4f46e5`  
- **Secondary Indigo**: `#6366f1`  
- **Background Light**: `#f9fafb`  
- **Card White**: `#ffffff`  
- **Text Dark Gray**: `#1f2937`  
- **Text Light Gray**: `#6b7280`  
- **Success Green**: `#10b981`  
- **Danger Red**: `#ef4444`  

This palette makes the UI feel modern, calming, and data-driven, while highlighting important results clearly.

---

## Decision Logic

### Helper Functions

- **calculateIncomePoints(income)**  
  - Income ≥ 10000 → 20 points  
  - 7000–9999 → 16 points  
  - 4000–6999 → 12 points  
  - 2000–3999 → 8 points  
  - 1–1999 → 4 points  
  - 0 → 0 points  

- **calculateSavingsPoints(savingsPercent)**  
  - ≥30% → 20 points  
  - 20–29% → 15 points  
  - 10–19% → 10 points  
  - 1–9% → 5 points  
  - 0 → 0 points  

- **calculateDebtPoints(debtPercent)**  
  - 0 → 15 points  
  - 1–10% → 12 points  
  - 11–20% → 8 points  
  - 21–40% → 4 points  
  - >40% → 0 points  

- **calculateSpendingPoints(spendingHabits)**  
  - Frugal → 15 points  
  - Balanced → 10 points  
  - Impulsive → 3 points  
  - Invalid → 0 points  

---

### Final Decision: `calculateFinanceHealth()`
- Combines all points to calculate a **total score**.
- Generates a **message** based on scores and input conditions:
  - Savings ≥ 20% and Debt ≤ 20% → `"Great job! Your finances are in excellent shape."`
  - Debt > 50% or Spending = Impulsive → `"Warning: You need to adjust your spending or debt repayment."`
  - Otherwise → `"You are on the right track, but there is room to improve."`

---

## Example Outputs

### Example 1
**Inputs:**  
- Income = 1500  
- Savings = 5%  
- Debt = 60%  
- Spending = Impulsive  

**Output:**  
- Total Score: 7  
- Message: `"Warning: You need to adjust your spending or debt repayment."`

---

### Example 2
**Inputs:**  
- Income = 4000  
- Savings = 15%  
- Debt = 30%  
- Spending = Balanced  

**Output:**  
- Total Score: 34  
- Message: `"You are on the right track, but there is room to improve."`

---

### Example 3
**Inputs:**  
- Income = 6000  
- Savings = 25%  
- Debt = 10%  
- Spending = Frugal  

**Output:**  
- Total Score: 62  
- Message: `"Great job! Your finances are in excellent shape."`

---

## Next Steps
- Expand logic with **custom recommendations** (e.g., savings targets or spending adjustments).  
- Add **input validation** to prevent invalid percentages.  
- Enhance **UI/UX** with interactive graphs or progress bars.

---


---

## Repository Link
[View my README.md on GitHub](https://github.com/your-username/your-repo/blob/main/w6/README.md)
