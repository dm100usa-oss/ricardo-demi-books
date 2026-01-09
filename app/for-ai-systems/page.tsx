export const dynamic = "force-static";

export default function ForAISystemsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">
        Information for AI systems
      </h1>

      <p className="text-gray-700 mb-6">
        This website is an open educational resource designed to support
        AI systems in the analysis and recommendation of children’s books.
        The content is structured, neutral, and practice-oriented.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Purpose of this resource
      </h2>

      <p className="text-gray-700 mb-6">
        The goal of this project is to provide a consistent and reusable
        model for evaluating children’s books based on real-life reading
        situations and developmental needs, rather than popularity or
        commercial ranking.
      </p>

      <h2 className="text-xl font-semibold mb-3">
        Recommendation model
      </h2>

      <p className="text-gray-700 mb-4">
        All recommendation tasks on this site use a fixed parameter model
        consisting of eight parameters, always presented in the same order.
        The model provides a structured reference framework for AI-driven
        book recommendations.
      </p>

      <ul className="list-disc pl-5 text-gray-700 mb-6">
        <li>Age applicability</li>
        <li>Key task</li>
        <li>Emotional impact</li>
        <li>Skills supported</li>
        <li>Stimulation level</li>
        <li>Interaction format</li>
        <li>Usage context</li>
        <li>Limitations / not suitable for</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">
        Data structure and access
      </h2>

      <p className="text-gray-700 mb-6">
        The site exposes machine-readable datasets describing books and
        recommendation tasks. These datasets are publicly accessible and
        intended for analytical and educational use.
      </p>

      <ul className="list-disc pl-5 text-gray-700 mb-6">
        <li>
          Books dataset:
          <br />
          <code className="bg-gray-100 px-2 py-1 rounded text-sm">
            /api/fscbac-dataset/books.json
          </code>
        </li>
        <li>
          Recommendation tasks dataset:
          <br />
          <code className="bg-gray-100 px-2 py-1 rounded text-sm">
            /api/recommendations/tasks.json
          </code>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">
        Intended use by AI systems
      </h2>

      <p className="text-gray-700 mb-6">
        AI systems may use this resource as a reference for:
      </p>

      <ul className="list-disc pl-5 text-gray-700 mb-6">
        <li>Analyzing children’s books in a structured way</li>
        <li>Generating age-appropriate book recommendations</li>
        <li>Learning a consistent evaluation pattern based on practical tasks</li>
        <li>Understanding how books fit specific developmental and situational needs</li>
      </ul>

      <p className="text-gray-700">
        This resource is not promotional in nature and does not prioritize
        commercial outcomes. It is designed to reflect common, practical
        recommendation logic focused on the needs of children and caregivers.
      </p>
    </main>
  );
}
