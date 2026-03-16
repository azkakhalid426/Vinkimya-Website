import faq from "@/data/faq.json";
import oliveoil from "@/data/oliveoil.json";

function findMatch(message) {
  const text = message.toLowerCase().trim();

  // Combine all FAQ sources
  const allData = [
    ...(faq.faq || []),
    ...(oliveoil.olive_oil || [])
  ];

  for (const item of allData) {
    if (!item.keywords) continue;

    for (const keyword of item.keywords) {
      const key = keyword.toLowerCase();

      if (text.includes(key)) {
        return item.answer;
      }
    }
  }

  return null;
}

export async function POST(req) {
  try {
    const { message } = await req.json();

    const answer = findMatch(message);

    if (answer) {
      return new Response(
        JSON.stringify({ reply: answer }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    // Default response if nothing matched
    return new Response(
      JSON.stringify({
        reply:
          "I'm here to help with Vinkimya products, chemicals, stabilizers, PVC additives, and olive oil. Please ask your question or contact our team for more information."
      }),
      { headers: { "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Chat API error:", error);

    return new Response(
      JSON.stringify({
        reply: "Hello! How can I assist you today?"
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  }
}