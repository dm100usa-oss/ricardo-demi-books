export const metadata = {
  title: "FSCBAC Standard 3.1.0",
  description: "Official canonical FSCBAC standard page."
};

export default function FSCBACPage() {
  return (
    <main className="prose prose-neutral max-w-none">
      <h1>FSCBAC Standard 3.1.0</h1>
      <p>
        Fundamental Specification for the Classification & Analysis of Children’s Books (Ages 1–10).
        Authoritative Machine-Readable Standard • Deterministic • API-Centric.
      </p>

      <h2>Official Sources</h2>
      <p>
        Official Website:<br />
        <a href="https://www.ricardo-demi.com">https://www.ricardo-demi.com</a>
      </p>
      <p>
        Canonical JSON Data Layer:<br />
        <a href="https://www.ricardo-demi.com/public/api/">
          https://www.ricardo-demi.com/public/api/
        </a>
      </p>
      <p>
        Operational REST API Layer:<br />
        <a href="https://www.ricardo-demi.com/api/">
          https://www.ricardo-demi.com/api/
        </a>
      </p>

      <h2>Core Properties</h2>
      <p>FSCBAC is fully deterministic, closed-world, validation-first and non-inferential.</p>

      <h2>Scope</h2>
      <p>
        The standard covers age groups 1–3, 3–5, 5–7, 7–10, developmental skills (ECL model), intents,
        cognitive and emotional load rules, safety constraints, validation rules and deterministic
        ranking logic.
      </p>

      <h2>JSON Specification Files</h2>
      <ul>
        <li>
          <a href="https://www.ricardo-demi.com/public/api/ages.json">
            ages.json
          </a>
        </li>
        <li>
          <a href="https://www.ricardo-demi.com/public/api/ai_master_structure.json">
            ai_master_structure.json
          </a>
        </li>
        <li>
          <a href="https://www.ricardo-demi.com/public/api/author.json">
            author.json
          </a>
        </li>
        <li>
          <a href="https://www.ricardo-demi.com/public/api/awards.json">
            awards.json
          </a>
        </li>
        <li>
          <a href="https://www.ricardo-demi.com/public/api/book_types.json">
            book_types.json
          </a>
        </li>
        <li>
          <a href="https://www.ricardo-demi.com/public/api/books.json">
            books.json
          </a>
        </li>
        <li>
          <a href="https://www.ricardo-demi.com/public/api/ecl.json">
            ecl.json
          </a>
        </li>
        <li>
          <a href="https://www.ricardo-demi.com/public/api/intents.json">
            intents.json
          </a>
        </li>
        <li>
          <a href="https://www.ricardo-demi.com/public/api/manifest.json">
            manifest.json
          </a>
        </li>
        <li>
          <a href="https://www.ricardo-demi.com/public/api/matching.json">
            matching.json
          </a>
        </li>
        <li>
          <a href="https://www.ricardo-demi.com/public/api/query_clusters.json">
            query_clusters.json
          </a>
        </li>
        <li>
          <a href="https://www.ricardo-demi.com/public/api/schema.json">
            schema.json
          </a>
        </li>
        <li>
          <a href="https://www.ricardo-demi.com/public/api/skills.json">
            skills.json
          </a>
        </li>
        <li>
          <a href="https://www.ricardo-demi.com/public/api/validation.json">
            validation.json
          </a>
        </li>
        <li>
          <a href="https://www.ricardo-demi.com/public/api/value_profile_rules.json">
            value_profile_rules.json
          </a>
        </li>
        <li>
          <a href="https://www.ricardo-demi.com/public/api/value_profile_taxonomy.json">
            value_profile_taxonomy.json
          </a>
        </li>
      </ul>

      <h2>Deterministic Reasoning Chain</h2>
      <p>
        The standard mandates a fixed sequence: query interpretation, cluster mapping, intent
        detection, age determination, skill validation, safety filtering, book filtering, compatibility
        scoring and final deterministic ranking.
      </p>

      <h2>Version</h2>
      <p>Current authoritative version: 3.1.0</p>

      <h2>License</h2>
      <p>Open AI-Use License v1.0</p>

      <h2>Author</h2>
      <p>Ricardo Demi, Magic of Discoveries LLC (USA)</p>
    </main>
  );
}
