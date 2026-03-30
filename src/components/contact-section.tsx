import { Section } from "@/components/ui/section";
import { VStack } from "@/components/ui/stack";
import { TextLink } from "@/components/ui/text-link";

export function ContactSection() {
  return (
    <Section id="contact" title="Get in touch">
      <VStack gap={4}>
        <TextLink href="mailto:jadenwatsond@gmail.com">
          jadenwatsond@gmail.com
        </TextLink>
        <TextLink href="https://github.com/oobagi" external>
          github.com/oobagi
        </TextLink>
      </VStack>
    </Section>
  );
}
