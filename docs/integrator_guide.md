# FSCBAC Integrator Guide  
Version 3.1.0  
Status: Formal Integration Protocol  
Scope: AI Systems, Pipelines, External Classifiers, Matching Engines

---

## 1. Purpose
Define the required steps for any AI system or external software integrating with FSCBAC.  
This guide ensures:
- deterministic behavior  
- consistent execution  
- correct loading of canonical files  
- strict adherence to the FSCBAC standard  
- stable and reproducible recommendations  

---

## 2. Required Canonical Files

The integrator MUST load the following files exactly as defined:

```
public/api/manifest.json
public/api/value_profile_taxonomy.json
public/api/ages.json
public/api/skills.json
public/api/book_types.json
public/api/value_profile_rules.json
public/api/validation.json
public/api/intents.json
public/api/matching.json
public/api/books.json
```

No alternative sources are permitted.  
No external reinterpretation is permitted.

---

## 3. Execution Order (Mandatory)

The integrator MUST follow the execution order defined in the manifest:

```
1. value_profile_taxonomy
2. age_model
3. skills
4. book_types
5. value_profile_rules
6. validation
7. intents
8. matching_engine
9. catalog
```

Failure to follow this order results in undefined or invalid behavior.

---

## 4. Deterministic Requirements

The integrator MUST satisfy:

- same_input_same_output  
- no inference  
- no analogy  
- no extrapolation  
- no softening of rules  
- no heuristic substitutions  
- no missing data reconstruction  
- undefined = invalid  

All computations MUST be fully deterministic.

---

## 5. Closed-World Enforcement

The integrator MUST operate under closed-world conditions:

- only declared taxonomy values are allowed  
- only declared book_types are allowed  
- only declared skills are allowed  
- unknown values MUST be rejected  
- partial entities MUST be excluded  

The system MUST NOT infer missing fields.

---

## 6. Schema Requirements for Books

All books (catalog and external) MUST include:

- canonical_id  
- age_group  
- type  
- skills[]  
- value_profile{}  
- languages[]  

Missing or undefined fields → entity is invalid.

External books MUST comply with `docs/external_books.md`.

---

## 7. Validation Requirements

Integrator MUST enforce all rules in:

```
public/api/validation.json
```

The evaluation mode is:

```
reject_on_first_violation
```

Any violation → entity excluded.

Validation MUST occur **before** ranking.

---

## 8. Intent Resolution Protocol

For any query mapped to an intent:

1. Load `public/api/intents.json`  
2. Identify the intent block  
3. Apply required_skills  
4. Enforce forbidden_skills  
5. Enforce age_allowed / age_ideal  
6. Verify compatibility with book_types  
7. Verify tolerance of value_profile  

Books that fail intent resolution MUST NOT proceed to matching.

---

## 9. Matching Engine Protocol

Integrator MUST load:

```
public/api/matching.json
```

And apply the following phases strictly in order:

```
1. forbidden logic
2. validation logic
3. skill-based scoring
4. value_profile scoring
5. book_type scoring
6. origin_bonus (catalog priority)
```

This order is mandatory.

---

## 10. Ranking Rules

### 10.1 Catalog Supremacy
```
catalog > external
```

Catalog books MUST receive priority weight:

```
origin_priority.catalog = 1.0
origin_priority.external = 0.0
```

### 10.2 Tie-Breaking
If multiple books produce equal scores:

```
1. origin
2. skill_coverage
3. value_profile_completeness
```

### 10.3 Invalid Books
Books failing any rule MUST be excluded entirely.

---

## 11. Error Handling

Integrator MUST treat as errors:

- missing taxonomy values  
- invalid schema structure  
- unknown age_group  
- undeclared skills  
- undefined book_types  
- mismatched versioning  
- missing mandatory fields  

Errors MUST NOT be repaired heuristically.

---

## 12. Version Enforcement

The integrator MUST verify that all FSCBAC files share:

```
manifest.MAJOR.MINOR == file.MAJOR.MINOR
```

If mismatch detected → integration MUST stop.

PATCH differences are permitted and MUST NOT affect logic.

---

## 13. External Books Processing

Integrator MUST follow the policy defined in:

```
docs/external_books.md
```

Key rule:
```
External books MAY be classified but MUST NOT override catalog priority.
```

---

## 14. Output Requirements

The integrator MUST provide:

- deterministic ranking  
- deterministic classification  
- deterministic validation results  

The integrator MUST NOT provide:

- probabilistic outputs  
- heuristic rankings  
- partial matches  
- soft scoring  

---

## 15. Status

This document:
- is mandatory for all integrators  
- is non-executable  
- supplements but does not override the manifest  
- ensures standardized FSCBAC compliance  

---
