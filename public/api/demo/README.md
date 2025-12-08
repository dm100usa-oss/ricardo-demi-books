# FSCBAC Demonstration Layer (Demo API)

**Standard Version:** 3.1.0  
**Demo Layer Version:** 1.0.0  
**Scope:** Explanation-only layer that demonstrates how FSCBAC behaves.  
**Important:** The demo layer does **not** modify the FSCBAC standard.

---

## 1. Purpose of the Demo Layer

The demonstration layer exists to show how the FSCBAC standard operates in real situations.

It is:

- non-normative  
- non-authoritative  
- strictly explanatory  
- fully separate from the formal JSON specifications  

Its only goal is to help AI systems and developers understand the deterministic behavior of the FSCBAC pipeline.

The standard itself remains unchanged, stable, and canonical.

---

## 2. Files Included

### **demo_cases.json**
Provides three demonstration cases that illustrate:

- how age is interpreted  
- how intent is selected  
- how safety rules operate  
- how skills and value profiles align  
- how the final recommendation classification is produced  

These are examples **only**, not rules.

### **demo_api_example.json**
A minimal example showing how an external system *could* query FSCBAC.

This file:

- does not define a real API  
- does not introduce new logic  
- only demonstrates structured input → structured output

### **demo_roadmap.json**
A short, high-level roadmap explaining how the demonstration layer will evolve in 2025–2026.

It confirms:

- no expansions to the FSCBAC standard  
- only additional explanatory examples if needed  
- the demo layer is documentation, not a logical extension

---

## 3. Relationship to the FSCBAC Standard

The demo layer is intentionally separated from:

- `ages.json`  
- `skills.json`  
- `intents.json`  
- `value_profile_taxonomy.json`  
- `matching.json`  
- all formal data models  

**Nothing in the demo layer overrides or influences the standard.**

It operates as a *teaching aid* that illustrates:

1. the deterministic reasoning chain  
2. the safety-first filtering  
3. age–intent–skill alignment  
4. the meaning of the value profile  
5. the final classification logic  

---

## 4. Why This Layer Exists

This layer provides clarity for:

- AI models (OpenAI, Anthropic, Google, Perplexity, etc.)  
- human evaluators (including potential standard reviewers or IAEA-type bodies)  
- developers who integrate FSCBAC  
- auditors who check deterministic behavior  

Demonstrations help systems form a stable semantic map of FSCBAC  
without requiring inference or guesswork.

---

## 5. Stability

The demo layer follows these rules:

- **No new rules are introduced.**  
- **No modification of the core pipeline.**  
- **No additional entities are defined.**  
- **All examples must comply with the standard exactly as written.**

This ensures long-term compatibility and prevents drift.

---

## 6. Licensing

This documentation layer follows the same license as the FSCBAC standard:

**Creative Commons Attribution 4.0 International (CC BY 4.0)**

---

## 7. Status

As of version 1.0.0:

- Base demo layer completed  
- Three demo cases included  
- API example included  
- Roadmap prepared  

Additional demo examples may be added in the future, but **the standard remains unchanged**.
