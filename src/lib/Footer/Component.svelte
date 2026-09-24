<script>
    let props = $props();
</script>

<div style="height: 24px"></div>
<div class="footer">
    <span>
        Permafy is not affiliated with GaiaMod, PenguinMod, TurboWarp, Scratch, the Scratch Team,
        or the Scratch Foundation.
    </span>
    <span>
        Scratch is a project of the Scratch Foundation.
        It is available for free at <a href="https://scratch.org/">https://scratch.org/</a>.
    </span>
</div>
<div class="links">
    <a
        target="_blank"
        href="https://github.com/GaiaMod-Main/GaiaMod-ExtensionsGallery"
    >
        GitHub
    </a>
    <span style="margin: 0px 6px;">-</span>
    <a
        target="_blank"
        href="/"
    >
        Website
    </a>
    <span style="margin: 0px 6px;">-</span>
    <a target="_blank" href="https://discord.gg/fFnNT8RGav">Discord</a>
</div>
<div style="height: 12px"></div>
<div class="footer">
    <div>
        {@render props.children?.()}
    </div>
</div>
<div style="height: 12px"></div>

<style>
    :global(body.dark-mode) {
        color: white;
    }

    .links {
        width: 100%;
        
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .footer {
        width: 100%;
        margin-bottom: 4px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
