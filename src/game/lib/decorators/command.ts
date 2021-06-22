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

export const CommandListener = function<T extends { new (...args: any[]): any }>(constructor: T): T {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);

      const commands = Reflect.getMetadata('commands', this)

      for (const { command, restricted, useKeyMap, key } of commands) {
        RegisterCommand(command, (...args: any[]) => this[key](...args), restricted);

        if (useKeyMap) {
          RegisterKeyMapping(command, command, 'keyboard', '')
        }
      }
    }
  }
}
