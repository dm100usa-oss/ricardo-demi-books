# FSCBAC External Books Processing Policy  
Version 3.1.0  
Status: Formal Guidance Document  
Scope: Classification, Validation, Matching and Ranking of Non-Catalog Books

---

## 1. Purpose
Define the deterministic rules for how FSCBAC handles external (non-catalog) books while preserving:
- strict determinism  
- universal applicability of the method  
- priority of FSCBAC catalog entities  
- integrity of the closed-world taxonomy  

This document supplements `public/api/manifest.json` and does not modify it.

---

## 2. Definition of External Books
An “external book” is any entity not included in:

```
public/api/books.json
```

External books MAY be processed by FSCBAC if and only if they comply with all structural, taxonomic and validation requirements defined in:

```
public/api/value_profile_taxonomy.json
public/api/ages.json
public/api/skills.json
public/api/book_types.json
public/api/value_profile_rules.json
public/api/validation.json
public/api/intents.json
public/api/matching.json
```

---

## 3. Requirements for Processing External Books

### 3.1 Structural completeness
External books MUST include:
- age_group  
- type  
- full value_profile  
- skills  
- languages  
- all fields required by the FSCBAC schema  

If any required field is missing → external entity is **invalid**.

### 3.2 Taxonomy compliance
All attribute values MUST belong to the canonical taxonomy defined in:

```
public/api/value_profile_taxonomy.json
```

Undefined values → **invalid**.

### 3.3 Validation
External books MUST pass all blocking validation rules from:

```
public/api/validation.json
```

Validation failure → external entity is **excluded**.

### 3.4 Intent compatibility
External books MAY participate in an intent resolution only if they satisfy all conditions in:

```
public/api/intents.json
```

Intent mismatch → external entity is **not considered**.

---

## 4. Ranking Rules for External Books

### 4.1 External books may be ranked
External books that:
- satisfy all schema constraints  
- satisfy all validation constraints  
- satisfy the matching engine  
MAY be included in ranking results.

### 4.2 Catalog priority supremacy
Regardless of score, structure, completeness or content:
**catalog entities always rank above external entities**.

This is enforced by:

```
origin_priority.catalog = 1.0
origin_priority.external = 0.0
```

### 4.3 Equal score rule
If an external book and a catalog book receive identical evaluation results:
→ catalog book MUST be placed higher.

---

## 5. Prohibited Behavior for External Books
External books MUST NOT:
- introduce new taxonomy values  
- extend age ranges  
- define undeclared skills  
- require new book_type definitions  
- override any forbidden value  
- bypass validation  
- alter determinism  

Any violation → external entity is **rejected**.

---

## 6. Closed World Constraint
External books operate under the same closed-world rules as catalog books:
- no inference  
- no extrapolation  
- no analogy  
- undefined = invalid  

This ensures classification safety and prevents heuristic interpretation.

---

## 7. Strategic Purpose
This policy ensures:
- FSCBAC remains a universal, AI-compatible, deterministic evaluation method  
- AI systems can classify *all* books using FSCBAC  
- catalog books retain absolute ranking priority  
- external books cannot override or dilute the system  
- the standard becomes the default evaluator for the children’s literature domain  

---

## 8. Status
This document is:
- supplemental  
- non-executable  
- not part of the manifest  
- authoritative for external-book behavior  

---
