import 'reflect-metadata';

interface CommandProps {
  command: string;
  restricted: boolean;
  useKeyMap: boolean;
}

export const Command = ({ command, restricted, useKeyMap }: CommandProps) => {
  return function(target: unknown, key: string, descriptor: PropertyDescriptor): void {
    if (!Reflect.hasMetadata('commands', target)) {
      Reflect.defineMetadata('commands', [], target);
    }

    const commands: any[] = Reflect.getMetadata('commands', target);

    commands.push({
      command,
      restricted,
      useKeyMap,
      key
    })

    Reflect.defineMetadata('commands', commands, target);
  }
}

