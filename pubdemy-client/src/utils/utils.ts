export default function getInitials(name: string): string {
    const names = name.split(" ");
    let initials = "";

    if (names.length >= 2) {
      const firstName = names[0];
      const lastName = names[names.length - 1];
      initials = firstName[0] + lastName[0];
    } else if (names.length === 1) {
      const firstName = names[0];
      initials = firstName.slice(0, 2);
    }

    return initials.toUpperCase();
  }