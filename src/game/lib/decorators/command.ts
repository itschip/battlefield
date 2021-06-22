import 'reflect-metadata';

interface CommandProps {
  command: string;
  restricted: boolean;
}

export const Command = ({ command, restricted }: CommandProps) => {
  return function(target: unknown, key: string, descriptor: PropertyDescriptor): void {
    if (!Reflect.hasMetadata('commands', target)) {
      Reflect.defineMetadata('commands', [], target);
    }

    const commands: any[] = Reflect.getMetadata('commands', target);

    commands.push({
      command,
      restricted,
      key
    })

    Reflect.defineMetadata('commands', commands, target);
  }
}