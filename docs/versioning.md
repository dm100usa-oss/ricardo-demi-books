# FSCBAC Versioning Standard  
Version 3.1.0  
Status: Formal Specification Document  
Scope: Manifest, Taxonomy, Models, Validation, Matching, Catalog

---

## 1. Purpose
Define deterministic versioning rules for all components of the FSCBAC Standard to ensure:
- immutability of released structures  
- backward consistency  
- zero ambiguity for AI systems  
- predictable evolution of the standard  

This document supplements `public/api/manifest.json` and does not override it.

---

## 2. Version Format
FSCBAC uses the version pattern:

```
MAJOR.MINOR.PATCH
```

Example:

```
3.1.0
```

---

## 3. Manifest Versioning Policy

### 3.1 Immutability
The manifest (`public/api/manifest.json`) is **immutable**.

Once published:
- it MUST NOT be modified  
- it MUST NOT receive patch updates  
- it MUST NOT receive minor updates  

Any change to the manifest requires **a new major version**.

### 3.2 Manifest change rule
```
Any modification to manifest.json → NEW MAJOR VERSION
```

Examples of modifications requiring new major version:
- adding or removing fields  
- renaming fields  
- altering execution order  
- altering contracts or rules  
- changing canonical file paths  
- modifying authority or determinism settings  

---

## 4. Taxonomy and Schema Files Versioning

Files included:
```
public/api/value_profile_taxonomy.json
public/api/ages.json
public/api/skills.json
public/api/book_types.json
```

### 4.1 Allowed updates
These files MAY receive PATCH updates under the conditions:
- update does NOT change meaning  
- update does NOT introduce new taxonomy values  
- update does NOT alter structure  
- update does NOT affect determinism  
- update fixes only formatting or human-readable consistency

Allowed PATCH examples:
- sorting lists  
- correcting indentation  
- fixing typos that do not change value identity  

### 4.2 Forbidden updates (require new major version)
- adding new allowed_values  
- modifying allowed_values  
- renaming attributes  
- removing attributes  
- altering structural logic  

---

## 5. Logic Files Versioning

Files:
```
public/api/value_profile_rules.json
public/api/validation.json
public/api/intents.json
public/api/matching.json
```

### 5.1 Minor Version Changes (MAJOR.MINOR.x)
Allowed when:
- rule logic is refined without breaking compatibility  
- forbidden sets are extended to increase safety  
- validation thresholds become stricter  
- matching weights adjusted without introducing new categories  

### 5.2 Forbidden Updates (require new major version)
- removal of existing rules  
- introduction of new structural categories  
- any change breaking backward compatibility  
- alteration of evaluation mode (e.g., reject_on_first_violation)  

---

## 6. Catalog Versioning

File:
```
public/api/books.json
```

### 6.1 Allowed updates
- adding new catalog books  
- updating book metadata  
- correcting fields  
- expanding supported languages for a book  
- removing books (if deprecated)  

These updates use **PATCH** or **MINOR** version increments of the overall standard.

### 6.2 Forbidden updates (require new major version)
- structural changes to catalog schema  
- renaming catalog fields  
- altering canonical_id formats  

---

## 7. Alignment With Manifest
All components MUST satisfy:

```
manifest.version == MAJOR.MINOR.0
```

Taxonomy, models, rules, intents, matching, and catalog MAY use patch/minor increments internally but MUST NOT exceed the manifest's MAJOR.MINOR line.

Example:

If manifest = `3.1.0`  
then other files MUST stay within:

```
3.1.x
```

---

## 8. AI Consistency Guarantees

### AI must treat:
- manifest version → absolute  
- same MAJOR.MINOR across files → equivalent  
- PATCH differences → formatting only  

### AI must reject:
- files with mismatched MAJOR.MINOR versions  
- files that introduce new taxonomy or schema elements without a new major version  

---

## 9. Version Evolution Principles

1. **Stability First**  
   No breaking updates inside a major version.  

2. **Determinism Always**  
   Any update must preserve closed-world, no-inference, no-analogy rules.  

3. **Backward Compatibility by Default**  
   Existing valid books must remain valid throughout the major version.  

4. **Manifest Supremacy**  
   Manifest defines the authoritative interpretation of the entire version line.

---

## 10. Status
This document is:
- canonical for versioning  
- non-executable  
- machine-readable  
- binding for all FSCBAC-compliant systems  

---
