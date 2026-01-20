import React from 'react';
import ReactMarkdown from 'react-markdown';

const CrimeAndPunishmentContent = () => {
  const content = `
## Summary

Crime and Punishment is a psychological thriller that follows **Rodion Raskolnikov**, a former student living in poverty in St. Petersburg. He commits murder under the belief that he is extraordinary and above conventional morality. The novel explores his mental anguish and moral dilemma as he grapples with guilt and the consequences of his actions.

## My Thoughts

This masterpiece brilliantly explores the psychology of guilt and redemption. Dostoevsky's deep dive into Raskolnikov's tortured mind is unparalleled. The novel raises profound questions about morality, justice, and the human condition.

### What Makes It Remarkable

The interaction between Raskolnikov and Porfiry is a masterclass in psychological tension. Every conversation is a chess match of wits, with Porfiry slowly tightening the noose while never directly accusing Raskolnikov.

The character of Sonya represents redemption through suffering and faith - a stark contrast to Raskolnikov's rationalist approach to morality.

## Key Themes

### 1. The Danger of Rationalized Morality

Raskolnikov's "extraordinary man" theory suggests that certain individuals are above conventional morality and can commit crimes for the greater good. Dostoevsky systematically dismantles this notion throughout the novel.

\`\`\`
"If he has a conscience he will suffer for his mistake. 
That will be his punishment—as well as the prison."
\`\`\`

### 2. Guilt as Psychological Force

The novel demonstrates that guilt is not just a social construct but a deep psychological reality that cannot be rationalized away.

### 3. Redemption Through Suffering

Dostoevsky suggests that true redemption comes not through intellectual acceptance of wrongdoing, but through genuine suffering and spiritual awakening.

## Key Takeaways

- **Morality cannot be purely rational** - Compassion and empathy are essential components
- **Guilt is inescapable** - It manifests psychologically regardless of one's philosophical justifications
- **Suffering has meaning** - For Dostoevsky, suffering is the path to redemption
- **Poverty and desperation** can warp one's thinking and lead to dangerous rationalizations
- **Pride is destructive** - Raskolnikov's downfall begins with his pride and belief in his own exceptionalism

## Favorite Quotes

> "Pain and suffering are always inevitable for a large intelligence and a deep heart."

> "To go wrong in one's own way is better than to go right in someone else's."

## Impact on My Thinking

This book fundamentally changed how I think about morality and human psychology. It showed me that:

1. **Intellectual brilliance without compassion is dangerous**
2. **The human psyche has its own logic** that cannot be overridden by rational arguments
3. **Redemption is possible** but requires genuine confrontation with one's actions

A must-read for anyone interested in philosophy, psychology, or simply great literature.
  `;

  return (
    <div className="book-content-wrapper">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default CrimeAndPunishmentContent;
