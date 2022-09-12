import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "duration",
})
export class DurationPipe implements PipeTransform {
  private MIN_TO_HR: number = 60;

  transform(value: number, ...args: unknown[]): unknown {
    const hours = this.getHours(value);
    const mins = this.getMins(value);
    return hours ? `${hours}h ${mins}min` : `${mins}min`;
  }

  getHours(duration: number): number {
    return Math.floor(duration / this.MIN_TO_HR);
  }

  getMins(duration: number): number {
    return duration - this.getHours(duration);
  }
}
